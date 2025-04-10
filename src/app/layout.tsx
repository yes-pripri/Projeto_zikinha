import { Poppins } from "next/font/google";
import "./globals.scss";
import { Metadata } from "next";

const inter = Poppins({
  
  subsets: ['latin'],
  weight: ["400", "500", "600"]
});


export const metadata: Metadata = {
  title: "kathelen priscila machado ",
  description: "Kathelen Prisicla Machado is a software developer...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
