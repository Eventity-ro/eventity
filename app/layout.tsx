import "./globals.css";
import type {Metadata} from "next";
import { Inter } from "next/font/google";
import Header from "@/components/headers/Header";
import Footer from "@/components/footer/Footer";
import ClientLayout from "./client-layout";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Eventity",
    description: "Created by Eventity team",
    icons: {
        icon: "/favicon.svg",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientLayout>
                    <div className="flex flex-col min-h-screen">
                        <Header/>
                            <main className="flex-grow">
                                {children}
                            </main>
                        <Footer/>
                    </div>
                </ClientLayout>
            </body>
        </html>
    );
}
