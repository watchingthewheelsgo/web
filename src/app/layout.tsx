import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

// import { Analytics } from "@vercel/analytics/react";
// import clsx from "clsx";
// import { AxiomWebVitals } from "next-axiom";
// import { DM_Sans } from "next/font/google";
// import ToggleTheme from "./ToggleTheme";
// import Image from "next/image";
import Link from "next/link";
// import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
// import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
  );
  // return (
  //   <html lang="en" className={clsx("dark h-full", sans.variable)}>
  //     <body className="mx-auto h-full max-w-7xl bg-neutral-50 px-4 pt-10 text-gray-900 transition-colors dark:bg-neutral-800 sm:px-6 lg:px-8">
  //       <div className="flex min-h-full flex-col pb-20">
  //         <div className="flex items-center justify-between pb-8">
  //           <div className="flex items-center gap-10">
  //             <Link href="/" className="rounded-full">
  //               <Image
  //                 className="inline-block h-20 w-20 rounded-full"
  //                 src="/me.jpg"
  //                 alt=" "
  //                 width={256}
  //                 height={256}
  //               />
  //             </Link>
  //             <Link
  //               className="text-lg font-medium hover:underline dark:text-white"
  //               href="/"
  //             >
  //               Home
  //             </Link>
  //             <Link
  //               className="text-lg font-medium hover:underline dark:text-white"
  //               href="/blog"
  //             >
  //               Blog
  //             </Link>
  //           </div>
  //           <ToggleTheme />
  //         </div>
  //         <div className="animate-slideUp transition-opacity">{children}</div>
  //         <div className="flex-col prose mt-auto flex justify-between gap-8 pt-8 dark:prose-invert prose-h3:mt-0 md:flex-row">
  //           <div>
  //             <h3 className="">Contact me</h3>
  //             <div className="flex gap-3 pt-1">
  //               <a
  //                 className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
  //                 href="mailto:hey@imjosh.dev"
  //               >
  //                 <MailIcon />
  //               </a>
  //               <a
  //                 className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
  //                 href="https://github.com/gentiksolm"
  //               >
  //                 <GithubIcon />
  //               </a>
  //               <a
  //                 className="transition-all hover:text-orange-600 dark:hover:text-orange-500"
  //                 href="https://www.linkedin.com/in/joshgbrown/"
  //               >
  //                 <LinkedinIcon />
  //               </a>
  //             </div>
  //           </div>
  //           <div>
  //             <h3>Subscribe to the Blog</h3>
  //             {/* <Subscribe /> */}
  //           </div>
  //         </div>
  //         {/* <Toaster richColors={true} />
  //         <Analytics />
  //         <AxiomWebVitals /> */}
  //       </div>
  //     </body>
  //   </html>
  // );
}
