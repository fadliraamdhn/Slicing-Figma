"use client";

import { HomeDesktop, HomeMobile } from "~/components/templates/home";
import { useDevice } from "~/context/DeviceProvider";

export default function Home() {
    const { isMobile } = useDevice();
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
