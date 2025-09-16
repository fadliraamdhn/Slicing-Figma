import { LoginDesktop } from "~/app/(features)/login/pages/LoginDesktop";
import { LoginMobile } from "~/app/(features)/login/pages/LoginMobile";
import { Metadata } from "next";
import { headers } from "next/headers";
import { isMobileDevice } from "~/lib/iseMobileDevice";

export const metadata: Metadata = {
    title: "Nextjs - Template by Daffa Fathan",
    description: "Nextjs - Template",
};

export default function Login() {
    const ua = headers().get("user-agent") || "";
    const isMobile = isMobileDevice(ua);

    return isMobile ? <LoginMobile /> : <LoginDesktop />;
}
