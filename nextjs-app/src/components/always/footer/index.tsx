import Image from "next/image"
import Link from "next/link"
import sakuraeng_png from "../../../../public/sakuraeng.png"
import { Faq } from "./faq"
import { Constact } from "@/components/pages_c/contact/index"
export const Footer = () => {
  return (
    <footer>
      <section>
        <Faq />
      </section>

      {/* ？contact */}
      <section className="flex justify-center mb-12">
        <Constact />
      </section>

      <div className="p-[10vw] bg-white">
        <div className="w-full flex flex-col md:flex-row py-6 items-start">
          <div className="flex flex-1 items-start mb-6 text-black">
            <Link href="/" className="flex h-min items-end">
              <Image
                src={sakuraeng_png}
                alt="sakura eng logo"
                className="h-10 w-10"
              />

              <span className="text-lg font-semibold whitespace-nowrap">桜エンジニアリング</span>
            </Link>
          </div>
          <div className="hidden flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</Link>
              </li>
            </ul>
          </div>
          <div className="hidden flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="hidden mt-2  mr-2 md:block md:mr-0">
                <Link href="/blog" className="no-underline hover:underline text-gray-800 hover:text-pink-500">ブログ</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">私たちについて</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">お問い合わせ</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">お見積診断</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}