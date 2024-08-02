import { Inter } from "next/font/google";
import "./globals.css";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalProvider from "@/contexts/global"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Livraria",
  description: "Livraria",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ChakraProvider>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}