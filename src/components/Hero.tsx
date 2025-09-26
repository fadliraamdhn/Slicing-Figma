import { Play } from "lucide-react"

const Hero = () => {
    return (
        <div className="relative bg-orangeSky px-36 flex items-center rounded-b-[20%]">
            <div className="space-y-10 -mt-20">
                <p className="text-5xl font-bold text-orangeSmooth">Studying <span className="text-blueDark">Online is now much easier</span></p>
                <p className="text-2xl text-baseColor">Skilline is an interesting platform that will teach you in more an interactive way</p>
                <div className="flex items-center gap-10">
                    <button className="text-white text-2xl font-semibold bg-orangeSmooth py-5 px-7 rounded-full">
                        Join for free
                    </button>
                    <button className="bg-white p-5 rounded-full shadow">
                        <Play color="#65DAFF" fill="#65DAFF"/>                    
                    </button>
                    <p className="text-xl text-baseColor">Watch how it works</p>
                </div>
            </div>
            <div>
                <img src="./header-pic.png" alt="hero"/>
            </div>
        </div>
    )
}

export default Hero