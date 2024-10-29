"use client"
import { Toaster } from "@/components/ui/sonner";
import Header from "./_components/Header";
import "./globals.css";
import { Roboto, Montserrat} from "next/font/google"
import { usePathname } from "next/navigation";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({ children }) {


const currParam = usePathname();
  console.log(currParam)
  const showHeader=currParam=='/sign-in' || currParam=='/create-account' ? false : true;
  return ( 
    <html lang="en">
      <body
        className={montserrat.className}
      > {showHeader && <Header/>}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
