import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durak Go | Карточная мобильная игра",
  description:
    "Durak Go - мобильная карточная игра и студия, которая делает быстрые онлайн-партии в Дурака для игроков по всему миру.",
  icons: {
    icon: "/durak-go-icon.jpg",
    apple: "/durak-go-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
