"use client";

import { createContext, useContext, useEffect, useState } from "react";

type DeviceContextType = {
    isMobile: boolean;
};

const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

export function DeviceProvider({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
}

export function useDevice() {
    return useContext(DeviceContext);
}
