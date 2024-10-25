
import Header from "./_components/Header";
import "./globals.css";
import { Roboto, Montserrat} from "next/font/google"


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body
        className={montserrat.className}
      ><Header/>
        {children}
      </body>
    </html>
  );
}
