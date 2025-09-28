import { ArrowRight } from "lucide-react"

export function PreviewDekstop() {
    return (
        <section className="mt-[306px]">
            <div className="flex gap-[141px]">
                <div className="w-[1500px] relative">
                    <img src="./preview1.png" alt="preview1" className="z-999"/>
                    <span className="w-[495px] h-[422px] bg-gray-100 absolute -top-16 p-1 -z-1 rounded-lg -left-30"></span>
                    <span className="w-[495px] h-[301px] bg-gray-100 absolute top-16 p-1 -z-1 rounded-lg -right-14"></span>
                    <span className="w-[500px] h-[423px] bg-orange-200 absolute -bottom-6 p-1 -z-1 rounded-lg left-2 blur-2xl"></span>
                </div>
                <div className="pr-[141px] flex flex-col gap-[20px]">
                    <p className="text-orange-300 text-[18px] tracking-wide">Experiences</p>
                    <p className="text-[42px] font-bold">we provide you the best experience</p>
                    <p className="text-[18px] leading-[180%]">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    <div className="flex text-[14px] mt-[60px] gap-4 items-center">
                        <p className="text-orange-300">View All</p>
                        <ArrowRight width={18} color="orange"/>
                    </div>
                </div>
            </div>

            <div className="flex gap-1 mt-[270px]">
                <div className="pl-[80px] pr-[94px] flex flex-col gap-[20px]">
                    <p className="text-orange-300 text-[18px] tracking-wide">Materials</p>
                    <p className="text-[42px] font-bold">Very serious materials for making furniture</p>
                    <p className="text-[18px] leading-[180%]">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                    <div className="flex text-[14px] mt-[60px] gap-4 items-center">
                        <p className="text-orange-300">More Info</p>
                        <ArrowRight width={18} color="orange"/>
                    </div>
                </div>
                <div className="flex relative">
                    <div className="mr-[42px]">
                        <img src="./preview4.png" alt="preview4"/>
                        <img src="./preview3.png" alt="preview3"/>
                    </div>
                    <div className="mt-29">
                        <img src="./preview2.png" alt="preview2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}