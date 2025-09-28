import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function FooterDesktop() {
    return (
        <footer className="bg-gray-100 py-[118px] px-[188px]">
            <div className="flex">
                <div className="space-y-[29px] mr-[152px]">
                    <p className="text-[29px] font-bold">Panto</p>
                    <p className="text-[15px] leading-[160%] font-light">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                <div className="flex gap-[110px]">
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[17px] text-orange-300">Services</p>
                        <p className="text-[15px]">Email Marketing</p>
                        <p className="text-[15px]">Campaign</p>
                        <p className="text-[15px]">Branding</p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[17px] text-orange-300">Furniture</p>
                        <p className="text-[15px]">Beds</p>
                        <p className="text-[15px]">Chair</p>
                        <p className="text-[15px]">All</p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[17px] text-orange-300">Follow Us</p>
                        <div className="flex gap-2 items-center">
                            <Facebook fill="black" width={17}/>
                            <p className="text-[15px]">Facebook</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Twitter fill="black" width={17}/>
                            <p className="text-[15px]">Twitter</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Instagram width={17}/>
                            <p className="text-[15px]">Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[118px] flex justify-between">
                <div>
                    <p className="text-[15px] opacity-50">Copyright © 2021</p>
                </div>
                <div className="flex gap-5">
                    <p className="text-[15px] opacity-50">Terms & Conditions</p>
                    <p className="text-[15px] opacity-50">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}
