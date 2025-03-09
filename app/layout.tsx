import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import {HeroUIProvider} from "@heroui/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Eventity",
    description: "Created by Eventity team",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        {/*<Head>*/}
        {/*    <link rel="icon" type="image/svg+xml" href="/logo.svg"/>*/}
        {/*    <link rel="icon" type="image/png" sizes="32x32" href="/logo.png"/>*/}
        {/*</Head>*/}
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
