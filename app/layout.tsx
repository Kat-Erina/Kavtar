import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Kavtar Development",
  description: "Kavtar Development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}