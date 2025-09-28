import { Handbag,ChevronDown } from "lucide-react"

export function NavbarDekstop() {
    return (
        <header className="flex justify-around px-[80px] pt-[41px] items-center text-white">
            <div>
                <p className="text-[28px] tracking-[1%] font-bold">Panto</p>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-[63px] text-[18px]">
                        <li className="flex gap-[8px]">
                            Furniture
                            <ChevronDown/>
                        </li>
                        <li>
                            Shop
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="relative">
                <Handbag width={34}/>
                <p className="absolute top-0 -right-2 bg-orange-400 text-white rounded-full w-[20px] h-[25px] text-center">0</p>
            </div>
        </header>
    )
}