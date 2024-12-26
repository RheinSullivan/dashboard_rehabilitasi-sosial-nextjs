import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rehabilitasi Sosial",
  description: "Bidang Rehabilitasi Sosial, Dinas Sosial Kabupaten Cirebon",
  icons: {
    icon: "/icons/crb.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
