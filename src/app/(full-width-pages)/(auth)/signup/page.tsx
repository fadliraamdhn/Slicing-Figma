import SignUpLayout from "~/app/(full-width-pages)/(auth)/signup/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nextjs - Template by Daffa Fathan",
    description: "Nextjs - Template",
};

export default function SignUp() {
    return <SignUpLayout />;
}
