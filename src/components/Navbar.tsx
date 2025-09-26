const Navbar = () => {
    return (
        <header className="flex justify-between px-30 py-8 bg-orangeSky">
            <div className="flex items-center">
                <p className="relative text-blueDark font-bold text-2xl z-100">Skilline</p>
                <span className="absolute p-5 rounded bg-blueSky left-28 rotate-45"></span>
            </div>
            <div className="flex gap-4 items-center">
                <ul className="flex gap-19 mr-14 text-xl">
                    <li>Home</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Us</li>
                </ul>
                <div className="flex gap-8 text-xl">
                    <button className="bg-white rounded-full py-2 px-7 text-gray-700">
                        Login
                    </button>
                    <button className="bg-orangeSmooth rounded-full py-2 px-7 text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar