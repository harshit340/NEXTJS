"use client"
import React from "react"
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
    // in layout the sate is always preserved in all the route register password and login buit what if we want to change the state for each route for this we can change the name of layout.tsx => template.tsx
    const [input , setInput] = React.useState("")
    return (
      <div>
        <input value={input} onChange={e=>setInput(e.target.value)}></input>
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
  