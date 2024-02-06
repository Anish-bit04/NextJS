"use client";
import { useRouter } from "next/navigation";
export default function Order(){
    const router = useRouter();
    const handleclick=()=>{
        router.push("/")
    }
    return(
        <>
        <h1>PLace your Order</h1>
        <button onClick={handleclick}>Order</button>
        </>
    )
}