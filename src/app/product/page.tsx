import Link from "next/link"
export default function product () {
    const productid = 100;
    return (
    <>
    <Link href="/">Home</Link>
    <h1>products list </h1>
    <h2><Link href="product/1">products list 1 </Link></h2>
    <h2>products list 2</h2>
    <h2>products list 3</h2>
    <Link href={`product/${productid}`}>product {productid}</Link>
    </>
)
}