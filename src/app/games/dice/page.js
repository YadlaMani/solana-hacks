"use client";
import React, { useState } from "react";

const DiceGame = () => {
  const [result, setResult] = useState(null);
  const [rolls, setRolls] = useState(0);
  const [loading, setLoading] = useState(false);

  const rollDice = () => {
    setLoading(true);
    // Simulate a dice roll with a 1-second delay
    setTimeout(() => {
      const diceResult = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      setResult(diceResult);
      setRolls(rolls + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Dice Game
      </h1>
      <div className="text-center">
        {loading ? (
          <div className="text-lg text-gray-600">Rolling...</div>
        ) : (
          <div className="text-6xl font-bold text-gray-900">
            {result !== null ? result : "Roll the Dice!"}
          </div>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={rollDice}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Roll Dice
        </button>
      </div>
      <div className="text-center">
        <p className="text-gray-600">Number of Rolls: {rolls}</p>
      </div>
    </div>
  );
};

export default DiceGame;
