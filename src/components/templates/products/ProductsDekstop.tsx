"use client"

import { Star, Plus, ArrowRight, ArrowLeft } from "lucide-react"
import { useState } from "react"

type ProductProps = {
    image: string
    type: string
    name: string
    price: number
}

export function ProductDekstop() {
    const [products] = useState<ProductProps[]>([{
        image: "./chair1.png",
        type: "Chair",
        name: "Sakarias Chair",
        price: 392
    }, {
        image: "./chair2.png",
        type: "Chair",
        name: "Baltsar Chair",
        price: 299
    }, {
        image: "./chair3.png",
        type: "Chair",
        name: "Anjay Chair",
        price: 519
    }]) 

    return (
        <section className="py-[50px] px-[121px] bg-gray-100 flex flex-col items-center">
            <div>
                <p className="text-[42px] text-center font-bold">Best Selling Product</p>
            </div>
            <div className="bg-gray-200 flex mt-[32px] text-center p-2 rounded-full flex justify-center text-gray-500">
                <p className="rounded-full bg-white px-4 py-2">Chair</p>
                <p className="rounded-full px-4 py-2">Beds</p>
                <p className="rounded-full px-4 py-2">Sofa</p>
                <p className="rounded-full px-4 py-2">Chair</p>
            </div>
            <div className="relative pt-[80px] flex gap-[42px]">
                    {products.map((product, idx) => (
                    <div className="shadow-sm rounded-lg">
                        <img src={product.image} alt={product.image} className="px-[24px]"/>
                        <div className="bg-white px-[21px] pt-[13px] pb-[27px] rounded-b-lg">
                            <p className="text-gray-600">{product.type}</p>
                            <p>{product.name}</p>
                            <div className="flex gap-2">
                                <Star width={12} fill="orange" stroke="orange"/>
                                <Star width={12} fill="orange" stroke="orange"/>
                                <Star width={12} fill="orange" stroke="orange"/>
                                <Star width={12} fill="orange" stroke="orange"/>
                                <Star width={12} fill="orange" stroke="orange"/>
                            </div>
                            <div className="relative flex justify-between mt-[36px] items-center">
                                <p className="absolute top-0 left-0">$</p>
                                <p className="px-3">{product.price}</p>
                                <div className="bg-black rounded-full p-2">
                                    <Plus color="white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <span className="absolute -right-6 p-3 top-65 rounded-full bg-white">
                        <ArrowRight />
                    </span>
                    <span className="absolute -left-6 p-3 top-65 rounded-full bg-white">
                        <ArrowLeft />
                    </span>
            </div>
            <div className="flex text-[18px] mt-[60px] gap-4 items-center">
                <p className="text-orange-300">View All</p>
                <ArrowRight width={18} color="orange"/>
            </div>
        </section>
    )
}