"use client";
import React, { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const SolBalance = () => {
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);
  const wallet = useWallet();
  useEffect(() => {
    getBalance();
  }, [wallet.publicKey]);
  async function getBalance() {
    if (wallet.publicKey) {
      try {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  }
  return (
    <div>
      {balance !== null ? (
        <h1 className="text-2xl font-semibold text-gray-800">
          Balance: {balance} SOL
        </h1>
      ) : (
        <p className="text-gray-500">No account linked yet</p>
      )}
    </div>
  );
};

export default SolBalance;
