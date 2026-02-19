import Cart from "@/components/cart/Cart";
import OpenCart from "@/components/cart/OpenCart";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import Announcement from "@/helpers/Announcement";
import TwSizeIndicator from "@/helpers/TwSizeIndicator";
import Footer from "@/partials/Footer";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html suppressHydrationWarning={true} lang="en">
      {/* google tag manager */}
      {config.google_tag_manager.enable && (
        <GoogleTagManager gtmId={config.google_tag_manager.gtm_id} />
      )}

      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="commerceplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""
            }&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Announcement />
          <Header>
            <OpenCart />
            <Cart />
          </Header>
          <main>{children}</main>
          <Footer />
        </Providers>
        {/* Chatbot widget */}
        <Script
          id="chatbot-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var email = null;
                try {
                  Object.keys(localStorage).forEach(function (k) {
                    var v = localStorage.getItem(k);
                    if (!v) return;
                    var key = k.toLowerCase();
                    if (
                      v.includes("@") ||
                      key.includes("user") ||
                      key.includes("auth") ||
                      key.includes("email")
                    ) {
                      try {
                        var parsed = JSON.parse(v);
                        if (
                          parsed &&
                          typeof parsed.email === "string" &&
                          parsed.email.includes("@")
                        ) {
                          email = parsed.email;
                        }
                      } catch (e) {
                        if (!email && v.includes("@")) {
                          email = v;
                        }
                      }
                    }
                  });
                } catch (e) {
                  // ignore localStorage errors
                }

                window.ChatBotConfig = {
                  companyId: "db93333e-4532-4722-83c0-20c9316cb92e",
                  position: "right",
                  buttonColor: "#8E2DE2",
                  theme: "dark",
                  origin: "shopify",
                  customerEmail: email || undefined,
                };
              })();
            `,
          }}
        />
        <Script
          id="chatbot-widget"
          src="https://backend.aviprojects.me/chatbot-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
