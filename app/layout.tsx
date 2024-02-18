import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
    title: "Aaryan Dehade",
    description: "Aaryan Dehade's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto_mono.variable} select-none`}>
            <body className={roboto_mono.className}>{children}</body>
        </html>
    );
}
