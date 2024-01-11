import Head from 'next/head';
import Image from 'next/image';
import { Black_Ops_One } from 'next/font/google';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const blackOpsOne = Black_Ops_One({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KM Entertainment</title>
      </Head>
      <main>
        <header className="w-full pt-8 sm:pt-14 flex flex-col gap-5 sm:gap-9 items-center justify-center">
          <Image
            src="/logoBlack.png"
            alt="KM Entertainment"
            width={919}
            height={858}
            className="w-4/5 max-w-xs block dark:hidden"
          />
          <Image
            src="/logoWhite.png"
            alt="KM Entertainment"
            width={919}
            height={858}
            className="w-4/5 max-w-xs hidden dark:block"
          />
          <h1
            className={`text-[9vw] sm:text-5xl text-center text-black dark:text-white ${blackOpsOne.className}`}
          >
            KM Entertainment
          </h1>
        </header>
        <section className="mt-9 sm:mt-14 w-full">
          <p className="text-xl text-center font-bold italic text-black dark:text-white">
            Website under construction
          </p>
        </section>
        <section className="mt-9 sm:mt-14 w-full">
          <p className="text-2xl text-center font-bold text-black dark:text-white">
            Contact us
          </p>
          <div className="flex gap-5 justify-center mt-3">
            <a
              href="https://www.facebook.com/kmentertainment.ger"
              target="_blank"
              className="text-4xl text-black dark:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_km_entertainment_"
              target="_blank"
              className="text-4xl text-black dark:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:info@km-entertainment.de"
              target="_blank"
              className="text-4xl text-black dark:text-white"
            >
              <MdMail />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
