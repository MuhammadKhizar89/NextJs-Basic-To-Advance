import Header from "./_components/Header";
import Logo from "./_components/Logo"
import Navigation from "./_components/Navigation"
import "@/app/_styles/globals.css"
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: {
    template: '%s The Wild Oasis',
    default: 'Welcome The Wild Oasis'
  },
  description: 'The Wild Oasis. The perfect spot for a peaceful, calm vacation. Welcome to Paradise.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header/>
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
