"use client"
const randomNumber=(count : number)=>{
    return Math.floor(Math.random()*count)
  }
  
import { notFound } from "next/navigation";
export default function ReviewDetails({params}:{
    
    params:{
        productId:string;
        reviewId:string;
    }
}){
    const random = randomNumber(2)
    if (random===0){
      throw new Error("New error refresh to resolve")
    }
    if (parseInt(params.reviewId)>1000){notFound()}
    return (
        <>
        <h1>review {params.reviewId} product {params.productId}</h1>
        </>
    )
}