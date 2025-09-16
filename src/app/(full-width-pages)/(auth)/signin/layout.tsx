"use client";

import { SignInDesktop } from "~/components/auth/sign-in/SignInDesktop";
import { SignInMobile } from "~/components/auth/sign-in/SignInMobile";
import { useDevice } from "~/context/DeviceProvider";

export default function SignInLayout() {
    const { isMobile } = useDevice();
    return isMobile ? <SignInMobile /> : <SignInDesktop />;
}
