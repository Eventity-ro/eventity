import type {Metadata} from "next";

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
        <body>
            {children}
        </body>
        </html>
    );
}
