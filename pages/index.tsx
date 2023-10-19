import Image from "next/image";
import { Inter } from "next/font/google";
import { Head } from "@/components/Head";
import { Layout } from "@/components/Layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head />
      <Layout>
        <div className="flex flex-col font-mono"></div>
      </Layout>
    </div>
  );
}
