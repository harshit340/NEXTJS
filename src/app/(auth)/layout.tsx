"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navlinks = [
    {name:"register" , href:"/registration"},
    {name:"password" , href:"/password"},
    {name:"login" , href:"/login"},
]

  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
    
  }) {
    const pathname = usePathname()
    
    return (
      <div>
        {navlinks.map((link)=>{
            const isActive = pathname.startsWith(link.href);
            return (
                <Link href={link.href} key={link.name} className={isActive? "font-bold mr-5" : "text-blue-500 mr-4"}>
                    {link.name}
                </Link>
            );
        })}
        {children}
      </div>
    )
  }
  