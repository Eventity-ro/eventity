import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {HeroUIProvider} from "@heroui/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Eventity",
    description: "Created by Eventity team",
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <div className="flex flex-col min-h-screen">
            <HeroUIProvider>
                <header>
                    <Header/>
                </header>
                <main className='flex-grow'>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </HeroUIProvider>
        </div>
            </body>
        </html>
    );
}
