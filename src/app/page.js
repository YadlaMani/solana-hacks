"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div>
      <div>
        <h1 className="text-red-800">Cyberpunk Gambling Dashboard</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h1
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => handleNavigation("/games/dice")}
          >
            Dice
          </h1>
        </div>
        <div>
          <h1
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => handleNavigation("/games/mines")}
          >
            Mines
          </h1>
        </div>
        <div>
          <h1
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => handleNavigation("/games/blackjack")}
          >
            Blackjack
          </h1>
        </div>
        <div>
          <h1
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => handleNavigation("/games/limbo")}
          >
            Limbo
          </h1>
        </div>
      </div>
    </div>
  );
}
