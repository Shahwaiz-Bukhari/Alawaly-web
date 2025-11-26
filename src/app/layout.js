import "./globals.css";
import ThemeRegistry from "./Theme/ThemeRegistry";
import ClientLayoutWrapper from "./clientLayout/ClientLayoutWrapper";

export const metadata = {
  title: "Alawaly Real-Estate",
  description: "Alawaly site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
