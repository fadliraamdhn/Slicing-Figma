const Info = () => {
    return (
        <>
        <div className="mt-[154px] px-[310px]">
            <div className="text-center space-y-[20px] px-[99px]">
                <p className="text-[36px] text-blueDark font-semibold">What Is <span className="text-orangeSmooth">Skilline?</span></p>
                <p className="text-[24px] text-baseColor">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <div className="flex items-center justify-center mt-[80px] gap-[100px]">
                <div className="px-[154px] py-[132px] bg-[url('/intructor.png')] bg-cover bg-center text-center rounded border">
                    <p className="font-semibold text-[32px] text-white">FOR INSTRUCTOR</p>
                    <button className="text-white border border-white py-[24px] px-[35px] rounded-full mt-[41px] font-medium">
                        Start a class today
                    </button>
                </div>
                <div className="px-[154px] py-[132px] bg-[url('/student.png')] bg-cover bg-center text-center rounded border">
                    <p  className="font-semibold text-[32px] text-white">FOR STUDENT</p>
                    <button className="text-white bg-blueSky py-[24px] px-[35px] rounded-full mt-[41px] font-medium">
                        Enter access code
                    </button>
                </div>
            </div>
        </div>

        <div className="mt-[160px] px-[187px] flex gap-[67px]">
            <div className="relative space-y-[30px]">
                <p className="font-medium text-blueDark text-[37px] z-999">Everything you can do in a physical classroom, <span className="text-orangeSmooth">you can do with Skilline</span></p>
                <p className="text-baseColor text-[24px]">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <p className="underline text-baseColor text-[22px]">Learn more</p>
                <span className="bg-orangeSmooth absolute -top-2 -left-3 rounded-full p-8 -z-1"></span>
            </div>
            <div className="w-[1000px] relative">
                <img src="./confident.png" alt="confident" />
                <span className="bg-blueSky absolute -top-2 -left-2 rounded-lg p-10 -z-1"></span>
                <span className="bg-orangeSmooth absolute -bottom-3 -right-3 rounded-lg p-20 -z-1"></span>
            </div>
        </div>
        </>
    )
}

export default Info