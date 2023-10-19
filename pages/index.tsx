import Image from "next/image";
import { Inter } from "next/font/google";
import { Head } from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head />
      <div className="flex flex-col font-mono">
        
      </div>
    </div>
  );
}
