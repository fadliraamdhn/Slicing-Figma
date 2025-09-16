import { headers } from "next/headers";
import { HomeDesktop, HomeMobile } from "~/components/templates/home";
import { isMobileDevice } from "~/lib/iseMobileDevice";

export default function Home() {
    const ua = headers().get("user-agent") || "";
    const isMobile = isMobileDevice(ua);

    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
