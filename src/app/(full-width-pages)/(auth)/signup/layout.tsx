"use client";

import { SignUpDesktop } from "~/components/auth/sign-up/SignUpDesktop";
import { SignUpMobile } from "~/components/auth/sign-up/SignUpMobile";
import { useDevice } from "~/context/DeviceProvider";

export default function SignUpLayout() {
    const { isMobile } = useDevice();
    return isMobile ? <SignUpMobile /> : <SignUpDesktop />;
}
