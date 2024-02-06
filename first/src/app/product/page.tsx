import Link from "next/link"

const page = () => {
    const productId=100;
  return (
    <><h1>Product</h1>
    <Link href="/">Home</Link>
    <Link href="/product/1">Product 1</Link>
    <Link href="/product/2">Product 2</Link>
    <Link href="/product/3" replace>Product 3</Link>
    <Link href={`/product/${productId}`}>Product {productId}</Link>
    </>

  )
}

export default page