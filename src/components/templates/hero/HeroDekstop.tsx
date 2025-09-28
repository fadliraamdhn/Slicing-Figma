import { Search } from "lucide-react"

export function HeroDekstop() {
    return (
        <section className="text-white mt-[91px] flex flex-col items-center px-[192px]">
            <p className="text-[80px] leading-[130%]">Make your interior moreminimalistic & modern</p>
            <p className="text-[24px] leading-[160%] opacity-80 mt-[14px]">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            <div className="relative border w-[344px] rounded-full py-[15px] mt-[53px] bg-white/30 backdrop-blur-lg text-start">
                <input type="text" placeholder="Search furniture" className="placeholder:text-[18px] pl-[20px]"/>
                <div className="p-2 rounded-full bg-orange-400 absolute right-2 top-2">
                    <Search className=""/>
                </div>
            </div>
        </section>
    )
}