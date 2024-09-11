"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AppWalletProvider from "@/components/AppWalletAdapter";
import SolBalance from "@/components/SolBalance";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AppWalletProvider>
          <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-lg">
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
              <WalletMultiButton />
              <SolBalance />
            </div>
          </nav>
          <main className="flex-grow p-6">{children}</main>
        </AppWalletProvider>
      </body>
    </html>
  );
}
