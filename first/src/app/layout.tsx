import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | NextJS",
    default: "Learn NextJS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 style={{ backgroundColor: "skyblue"  }}>Header</h1>
        </header>
        {children}
        <footer>
          <h2
            style={{
              backgroundColor: "ghostwhite"
            }}
          >
            Footer
          </h2>
        </footer>
      </body>
    </html>
  );
}
