// app/layout.js
"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AppWalletProvider from "./components/AppWalletProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>
          <div>
            <nav>
              <WalletMultiButton />
            </nav>
            {children}
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}
