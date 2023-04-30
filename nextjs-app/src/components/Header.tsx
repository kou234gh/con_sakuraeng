import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

import sakuraeng_png from "../../public/sakuraeng.png"

const staggerMenuItems = stagger( 0.1, { startDelay: 0.15 } );

function useMenuAnimation ( isOpen: boolean ) {
  const [ scope, animate ] = useAnimate();

  useEffect( () => {
    // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [ isOpen ] );

  return scope;
}
// export const Header = () => {
export default function Header () {


  const [ isOpen, setIsOpen ] = useState( false );
  const scope = useMenuAnimation( isOpen );

  return (
    <div className="fixed grid grid-flow-col justify-between overflow-visible opacity-80 border-gray-200 p-5 mx-auto w-full dark:bg-black bg-white h-14 z-50">
      <Link href="/" className="h-auto grid grid-flow-col gap-2">
        <Image
          src={sakuraeng_png}
          alt="sakura eng logo"
          className="h-10 w-10"
        />

        <span className="text-lg font-semibold whitespace-nowrap">桜エンジニアリング</span>
      </Link>

      {/* スマホ画面ハンバーガーメニュ */}
      <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      {/* <div className="hidden md:block w-full md:w-auto" ref={scope}> */}
      {/* <div className="md:block w-full md:w-auto" ref={scope}> */}

      <ul className="hidden md:grid grid-flow-row md:grid-flow-col gap-2 md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">

        <li>
          <Link href="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">私たちについて</Link>
        </li>

        <li className="grid gap-3" ref={scope}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen( !isOpen )}
          >
            サービス
          </motion.button>
          <ul
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              color: "black",
              backgroundColor: "black",
            }}
          >
            <li>
              <Link href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-400 text-gray-800">ホームページ</Link>
            </li>
            <li>
              <Link href="#" className="block p-3 text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">業務効率化</Link>
            </li>
            {/* <li>Item 3 </li>
            <li>Item 4 </li>
            <li>Item 5 </li> */}
          </ul>{" "}
        </li>

        <li>
          <Link href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">お問い合わせ</Link>
        </li>
      </ul>

    </div>
  )
}
