"use client"
import { useRouter } from "next/navigation"

export default function orderpage () {
   const router = useRouter();
   const handlesubmit = ()=>{
  console.log("placing your order")
  router.push("/")
   }

  
    return (

    <>
    <button onClick={handlesubmit}>submit</button>
    </>
  )
}