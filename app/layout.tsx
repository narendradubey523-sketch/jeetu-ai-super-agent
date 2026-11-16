import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEETU AI Super Agent",
  description: "Your AI Super Agent Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
