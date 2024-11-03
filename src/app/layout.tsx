import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const mapleMono = localFont({
    src: "./fonts/MapleMono-Regular.woff2",
    variable: "--font-maple-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Hi, I'm Kaoru 👋",
    description: "Kaoru's Profile",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${mapleMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
