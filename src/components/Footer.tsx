const Footer = () => {
    return (
        <div className="bg-footer mt-[160px]">
            <div className=" pt-[74px] flex gap-[41px] justify-center text-white">
                <div className="relative">
                    <span className="absolute rotate-45 top-0 -left-2 border-2 rounded-lg border-sky-300 p-6 z-10"></span>
                    <p className="font-bold text-[32px] relative z-20">Skilline</p>
                </div>
                <span className="bg-stone-100 px-0.5"></span>
                <p className="font-semibold text-[22px]">Virtual Class <br/> for Zoom</p>
            </div>
            <div className="text-center mt-[95px]">
                <p className="font-medium text-stone-300 tracking-wide">Subscribe to get our Newsletter</p>
                <div className="flex gap-[20px] justify-center mt-[20px]">
                    <input type="text" placeholder="Your Email" className="border border-stone-300 py-3 px-8 rounded-full placeholder-gray-300"/>
                    <button className="rounded-full py-2 px-6 bg-gradient-to-r from-blue-500 to-blue-800 font-medium text-white">Subscribe</button>
                </div>
            </div>
            <div className="mt-[96px] text-[22px] text-stone-300 flex justify-center gap-[8px]">
                <p>Careers</p>
                <p>|</p>
                <p>Privacy Policy</p>
                <p>|</p>
                <p>Terms & Conditions</p>
                
            </div>
            <p className="text-[22px] text-stone-300 text-center mt-[20px] pb-[40px]">
                © 2021 Class Technologies Inc. 
            </p>
        </div>
    )
}

export default Footer