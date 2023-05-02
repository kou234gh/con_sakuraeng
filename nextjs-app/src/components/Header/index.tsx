import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion, useCycle } from "framer-motion";
// import { useDimensions } from "./useDimention";

import sakuraeng_png from "../../../public/sakuraeng.png"

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

const Path = ( props: any ) => (
  <motion.path
    // fill="#fff"
    strokeWidth="3"
    // stroke="rgb(255 255 255)"
    className={"dark:fill-white dark:stroke-gray-100"}
    strokeLinecap="round"
    {...props}
  />
);

const sidebar = {
  open: ( height = 1000 ) => ( {
    clipPath: `circle(${ height * 2 + 200 }px at calc( 100% - 30px ) 40px)`,
    height: "100vh",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  } ),
  closed: {
    // clipPath: "circle(30px at 40px 40px)",
    clipPath: "circle(23px at calc( 100% - 28px ) 32px)",
    height: "0vh",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = [ "#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF" ];

export const Header = () => {


  const [ isOpen, setIsOpen ] = useState( false );
  const scope = useMenuAnimation( isOpen );

  const [ isToggleOpen, toggleOpen ] = useCycle( false, true );


  return (
    <div className="fixed flex flex-row items-start justify-between overflow-visible opacity-80 border-gray-200 px-8 mx-auto w-full dark:bg-black bg-white h-14 z-40">
      <Link href="/" className="h-auto pt-2 grid grid-flow-col gap-2 items-center">
        <Image
          src={sakuraeng_png}
          alt="sakura eng logo"
          className="h-10 w-10"
        />

        <span className="hidden md:block text-black text-lg font-semibold whitespace-nowrap dark:text-white">桜エンジニアリング</span>
      </Link>

      {/* スマホ画面ハンバーガーメニュ */}
      <motion.nav
        initial={false}
        className="md:hidden fixed top-0 right-0 bottom-0 opacity-100 w-[70vw] h-screen z-50"
        animate={isToggleOpen ? "open" : "closed"}
        variants={sidebar}
      // custom={height}
      // ref={containerRef}
      >
        <motion.div
          className="background h-screen w-[70vw] bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-gray-100 opacity-100"
          variants={sidebar}
          animate={isToggleOpen ? "open" : "closed"}
        />
        {/* <Navigation /> */}
        <motion.ul
          variants={variants2}
          className="fixed top-20 pl-8"
        >
          <li>
            <Link href="/about" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">
              私たちについて
            </Link>
          </li>
          <li className="grid gap-3" ref={scope}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen( !isOpen )}
            >
              <Link href="/#services" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-400 text-gray-800">
                サービス
              </Link>
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
                <Link href="services/homepage" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-400 text-gray-800">ホームページ</Link>
              </li>
              <li>
                <Link href="services/kourituka" className="block p-3 text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">業務効率化</Link>
              </li>
            </ul>{" "}
          </li>

          <li>
            <Link href="/blog" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">ブログ</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">お問い合わせ</Link>
          </li>
          
        </motion.ul>

        <button
          onClick={() => toggleOpen()}
          className="fixed top-5 right-4 "
        >
          <svg className="" width="23" height="23" viewBox="0 0 21 19">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" }
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" }
              }}
            />
          </svg>
        </button>
      </motion.nav>


      {/* デスクトップ画面用 */}
      <ul className="hidden md:grid grid-flow-row md:grid-flow-col pt-4 gap-2 md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link href="#services" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">私たちについて</Link>
        </li>

        <li className="grid gap-3" ref={scope}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen( !isOpen )}
          >
            サービス
          </motion.button>
          <ul
            className="dark:bg-gray-900 dark:text-gray-100 bg-gray-200 text-gray-900"
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              clipPath: "inset(10% 50% 90% 50% round 10px)",
            }}
          >
            <li>
              <Link href="#services" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">ホームページ</Link>
            </li>
            <li>
              <Link href="#services" className="block p-3  hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">業務効率化</Link>
            </li>
            {/* <li>Item 3 </li>
            <li>Item 4 </li>
            <li>Item 5 </li> */}
          </ul>{" "}
        </li>

        <li>
          <Link href="/blog" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">ブログ</Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white">お問い合わせ</Link>
        </li>
      </ul>

    </div>
  )
}
