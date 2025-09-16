import LoginLayout from "~/app/(features)/login/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Emobo - All in one device gadget solution",
    description: "Emobo - Signin page",
};

export default function Login() {
    return <LoginLayout />;
}
