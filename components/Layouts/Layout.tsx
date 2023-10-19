"use client";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </>
  );
}
