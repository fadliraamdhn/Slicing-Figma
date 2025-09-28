"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

type ReviewProps = {
    review: string
}

export function ReviewDesktop() {
    const [reviews] = useState<ReviewProps[]>([
        {
            review: "./review1.png"
        },
        {
            review: "./review2.png"
        },
        {
            review: "./review3.png"
        }
    ])
    return (
        <section className="pt-[240px] pb-[213px]">
            <div className="text-center space-y-[20px]">
                <p className="tracking-wide text-orange-300 text-[18px]">Testimonials</p>
                <p className="font-bold text-[42px]">Our Client Reviews</p>
            </div>
            <div className="mt-[60px] px-[127px] flex relative">
                {reviews.map((review, idx) => (
                    <img src={review.review} alt={review.review} />
                ))}
                <span className="absolute right-24 p-3 top-43 rounded-full bg-white">
                    <ArrowRight />
                </span>
                <span className="absolute left-28 shadow p-3 top-43 rounded-full bg-white">
                    <ArrowLeft />
                </span>
            </div>
        </section>
    )
}