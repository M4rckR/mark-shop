'use client'
import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
    product: Product
}

export const ProductGridItem = ({ product }: Props) => {

    const [displayedImage, setDisplayedImage] = useState(product.images[0])

    const handleImageHover = () => {
        setDisplayedImage(product.images[1])
    }

    const handleImageMouseLeave = () => {
        setDisplayedImage(product.images[0])
    }

  return (
    <div className="rounded-md overflow-hidden fade-in">
        <Image 
            src={`/products/${displayedImage}`} 
            alt={product.title} 
            width={500} 
            height={500} 
            className="w-full object-cover" 
            onMouseEnter={handleImageHover} 
            onMouseLeave={handleImageMouseLeave}
        />

        <div className="p-4 flex flex-col gap-2">
            <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
                <h3>{product.title}</h3>
            </Link>
            <p className="font-bold">${product.price}</p>
        </div>
    </div>
  )
}
