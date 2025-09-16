"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "~/context/SidebarContext";
import { ThemeProvider } from "~/context/ThemeContext";
import { DeviceProvider } from "~/context/DeviceProvider";
import { useEffect, useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
    }, []);

    return (
        <html lang="en" data-theme={theme}>
            <body className={outfit.className}>
                <DeviceProvider>
                    <ThemeProvider>
                        <SidebarProvider>{children}</SidebarProvider>
                    </ThemeProvider>
                </DeviceProvider>
            </body>
        </html>
    );
}
