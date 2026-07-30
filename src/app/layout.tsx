import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Thar Htet Zaw | Portfolio",
    template: "%s | Thar Htet Zaw",
  },

  description:
    "Portfolio of Thar Htet Zaw, Computer Science & Engineering student specializing in Full Stack Development, Artificial Intelligence, and Software Engineering.",

  keywords: [
    "Thar Htet Zaw",
    "Portfolio",
    "Computer Science",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Artificial Intelligence",
    "Web Development",
  ],

  authors: [
    {
      name: "Thar Htet Zaw",
    },
  ],

  creator: "Thar Htet Zaw",

  openGraph: {
    title: "Thar Htet Zaw | Portfolio",
    description:
      "Portfolio showcasing projects, skills, achievements, and experience in software engineering.",
    type: "website",
    locale: "en_US",
  },

  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-[#030303] text-zinc-300 min-h-screen">
        {children}
      </body>
    </html>
  );
}
