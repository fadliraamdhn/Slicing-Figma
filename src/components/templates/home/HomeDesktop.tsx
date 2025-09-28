import React from "react";
import { FooterDesktop } from "~/components/templates/footer/FooterDesktop";
import { NavbarDekstop } from "~/components/templates/navbar/NavbarDekstop";
import { InfoDekstop } from "~/components/templates/info/InfoDekstop";
import { HeroDekstop } from "~/components/templates/hero/HeroDekstop";
import { ProductDekstop } from "~/components/templates/products/ProductsDekstop";
import { PreviewDekstop } from "~/components/templates/preview/PreviewDekstop";
import { ReviewDesktop } from "~/components/templates/review/ReviewDesktop";

export function HomeDesktop() {
    return (
        <>
            <div className="text-center bg-[url('/Hero.png')] bg-cover bg-center h-screen">
                <NavbarDekstop/>
                <HeroDekstop/>
            </div>
            <InfoDekstop/>
            <ProductDekstop/>
            <PreviewDekstop/>
            <ReviewDesktop/>
            <FooterDesktop/>
        </>
    );
}
