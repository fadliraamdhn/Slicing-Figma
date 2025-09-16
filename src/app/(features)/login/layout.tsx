"use client";

import { LoginDesktop } from "~/app/(features)/login/pages/LoginDesktop";
import { LoginMobile } from "~/app/(features)/login/pages/LoginMobile";
import { useDevice } from "~/context/DeviceProvider";

export default function LoginLayout() {
    const { isMobile } = useDevice();
    return isMobile ? <LoginMobile /> : <LoginDesktop />;
}
