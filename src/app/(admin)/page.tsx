import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Nextjs - Template by Daffa Fathan",
    description: "Nextjs - Template",
};

export default function Dashboard() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <h1>Dashboard</h1>
        </div>
    );
}
