import Image from "next/image";
import { RocknRoll_One } from "next/font/google";
import { useState } from "react";

const rocknRoll = RocknRoll_One({ subsets: ["latin"], weight: "400" });

export function Header() {
  return (
    <>
      <div className="flex justify-around items-center h-[50px] bg-gray-100">
        <Image
          src="/OpenChatMatching.png"
          alt="OpenChat Matching"
          width={35}
          height={35}
        />
        <h2
          className={
            "text-center ml-[10px] text-2xl font-bold " + rocknRoll.className
          }
        >
          OC Matching
        </h2>
        <HamburgerMenu />
      </div>
    </>
  );
}

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "https://line-tool.ame-x.net/search",
  },
  {
    name: "Developer",
    link: "/developer",
  },
  {
    name: "OpenChat Graph",
    link: "https://openchat-review.me",
  },
];

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src="https://www.svgrepo.com/show/529002/hamburger-menu.svg"
            alt="Hamburger"
            width={30}
            height={30}
          />
        </button>
        <div className={(isOpen ? "block" : "hidden") + ""}>
          <div
            className={
              "fixed top-0 right-0 z-10 w-[75%] h-[100vh] bg-gray-100 opacity-[0.9]"
            }
          >
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col ">
                <button className="self-end" onClick={() => setIsOpen(false)}>
                  <img
                    src="https://www.svgrepo.com/show/525281/close-circle.svg"
                    alt="close"
                    className="w-[40px] h-[40px] m-[5px] mr-[10px]"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
              <div className="flex flex-col">
                {menus.map((menu, index) => (
                  <a
                    href={menu.link}
                    key={index}
                    className={
                      "text-center mt-[10px] text-xl " + rocknRoll.className
                    }
                  >
                    {menu.name}
                  </a>
                ))}
              </div>
              <h2 className="text-center my-[20px] text-xs">
                &copy; 2023- ame_x / @amex2189
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
