import Image from "next/image";
import { Inter } from "next/font/google";
import { Head } from "@/components/Head";
import { Layout } from "@/components/Layouts/Layout";
import { marked } from "marked";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head />
      <Layout>
        <div className="flex flex-col font-mono">
          <div className="hero p-10 mt-1">
            <Image
              src="/OpenChatMatching.png"
              alt="OpenChat Matching"
              width={500}
              height={500}
              className="mx-auto w-full h-full"
            />
            <h2 className="text-center mt-3 text-2xl font-bold">
              OpenChat Matching
            </h2>
            <div
              className="text-center mt-3 text-xs"
              dangerouslySetInnerHTML={{
                __html: marked(`
### **OpenChat Mathing** とは？

**OpenChat Matching** は、オープンチャットを運営している人と、利用しているユーザーを対象にしたサービスです。  
「 見つけたい 」と「 見つけて欲しい 」を繋げます。
`),
              }}
            ></div>
          </div>
          <a href="#contain">
            <img
              src="https://www.svgrepo.com/show/425981/bottom-arrow.svg"
              alt="arrow"
              className="w-[10%] mx-auto mt-[-15px] shadow-lg rounded-full p-1"
            />
          </a>
          <div id="contain"></div>
        </div>
      </Layout>
    </div>
  );
}
