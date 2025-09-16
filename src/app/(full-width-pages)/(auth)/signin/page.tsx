import SignInLayout from "~/app/(full-width-pages)/(auth)/signin/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nextjs - Template by Daffa Fathan",
    description: "Nextjs - Template",
};

export default function SignInPage() {
    return <SignInLayout />;
}
