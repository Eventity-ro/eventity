import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eventity",
    description: "Created by Eventity team",
    icons: {
        icon: "/favicon.svg",
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
