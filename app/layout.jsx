"use client";

import Navigation from "@/components/navigation";
import Particles from "@/components/particles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "@/app/styles/css/styles.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "ThisIsSanti.dev",
  description: "ThisIsSanti.dev",
};
 */
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* FavIcon */}
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/7914/7914802.png"
          type="image"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        {<Particles />}
      </body>
    </html>
  );
}
