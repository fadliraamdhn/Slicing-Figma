import { LayoutGrid, Square, UserRound } from "lucide-react"

const Features = () => {
    return (
        <div className="mt-[160px] px-[160px]">
            <div className="space-y-[20px] text-center">
                <p className="font-bold text-blueDark text-[36px]">Our <span className="text-orangeSmooth">Features</span></p>
                <p className="text-[24px] text-stone-500">This very extraordinary feature, can make learning activities more efficient</p>
            </div>
            <div className="flex mt-[100px]">
                <img src="./zoom.png" alt="zoom" />
                <div className="flex flex-col gap-[40px]">
                    <p className="font-semibold text-[40px] text-blueDark">A <span className="text-orangeSmooth">user interface </span>designed for the classroom</p>
                    <div className="text-stone-600 flex gap-[20px] text-[22px] items-center">
                        <div className="shadow rounded-full p-4">
                            <LayoutGrid/>
                        </div>
                        <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                    <div className="text-stone-600 flex gap-[20px] text-[22px] items-center">
                        <div className="shadow rounded-full p-4">
                            <Square/>
                        </div>
                        <p>TA’s and presenters can be moved to the front of the class.</p>
                    </div>
                    <div className="text-stone-600 flex gap-[20px] text-[22px] items-center">
                        <div className="shadow rounded-full p-4">
                            <UserRound/>
                        </div>
                        <p>Teachers can easily see all students and class data at one time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features