import { ArrowRight } from "lucide-react"

export function InfoDekstop() {
    return (
        <section className="py-[120px] px-[80px] flex">
            <p className="text-[42px] font-bold">Why Choosing Us</p>
            <div className="ml-[130px] flex gap-[28px] ">
                <div>
                    <p className="text-[24px]">Luxury facilities</p>
                    <p className="text-[16px] mt-[20px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <div className="text-[14px] text-orange-400 flex gap-[13px] mt-[14px]">
                        <p>More info </p>
                        <ArrowRight/>
                    </div>
                </div>
                 <div>
                    <p className="text-[24px]">Affordable Price</p>
                    <p className="text-[16px] mt-[20px]">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <div className="text-[14px] text-orange-400 flex gap-[13px] mt-[14px]">
                        <p >More info </p>
                        <ArrowRight/>
                    </div>
                </div>
                 <div>
                    <p className="text-[24px]">Many Choices</p>
                    <p className="text-[16px] mt-[20px]">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <div className="text-[14px] text-orange-400 flex gap-[13px] mt-[14px]">
                        <p >More info </p>
                        <ArrowRight/>
                    </div>
                </div>
            </div>
        </section>
    )
}