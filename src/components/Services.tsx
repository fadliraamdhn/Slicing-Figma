import { File, CalendarDays, UserRound } from "lucide-react"

const Services = () => {
    return (
        <div className="px-70">
            <div className="text-center space-y-8">
                <p className="text-4xl font-bold text-blueDark tracking-wide">All-In-One <span className="text-orangeSmooth">Cloud Software</span></p>
                <p className="text-2xl text-baseColor tracking-wide">Skilline is one powerful software suite that combines all the <br /> tools needed to run a successful school or office.</p>
            </div>
            <div className="flex gap-16 mt-20 text-center">
                <div className="relative shadow-lg p-18 place-items-center space-y-4">
                    <p className="text-blueDark text-2xl font-semibold">Online Billing, Invoicing, & Contacts</p>
                    <p className="text-baseColor text-lg">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                    <div className="absolute -top-10 bg-blueDark p-5 rounded-full">
                        <File color="white"/>
                    </div>
                </div>
                <div className=" relative shadow-lg p-18 place-items-center space-y-4">
                    <p className="text-blueDark text-2xl font-semibold">Easy Scheduling & Attendance Tracking</p>
                    <p className="text-baseColor text-lg">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    <div className="absolute -top-10 bg-orangeSmooth p-5 rounded-full">
                        <CalendarDays color="white"/>
                    </div>
                </div>
                <div className="relative shadow-lg p-18 place-items-center space-y-4">
                    <p className="text-blueDark text-2xl font-semibold">Customer Tracking</p>
                    <p className="text-baseColor text-lg">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                    <div className="absolute -top-10 bg-blueSky p-5 rounded-full">
                        <UserRound color="white"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services