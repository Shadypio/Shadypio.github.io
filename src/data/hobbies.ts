import React from "react";
import { Swords, Crown, Gamepad2 } from "lucide-react";
import { Hobby } from "../types";

export const hobbies: Hobby[] = [
  {
    title: "Martial Arts",
    description: "Practitioner of Karate (Shotokan) and Hung Gar Kung Fu. These disciplines have instilled a deep sense of tradition, strength, and continuous self-improvement in my daily life.",
    icon: React.createElement(Swords, { className: "w-5 h-5" }),
    details: ["Karate (Shotokan)", "Hung Gar Kung Fu"]
  },
  {
    title: "Chess",
    description: "A passion for strategy and long-term thinking. Chess serves as a mental gym, honing my analytical mindset and teaching me to anticipate complex patterns and outcomes.",
    icon: React.createElement(Crown, { className: "w-5 h-5" }),
    link: { url: "https://www.chess.com/member/shadypio", label: "1. e4 — your move" }
  },
  {
    title: "Video Games",
    description: "Enthusiast of immersive storytelling and challenging exploration. I particularly enjoy Action/Adventure narratives, the perseverance required in Roguelikes, and the intricate world-building of Metroidvanias.",
    icon: React.createElement(Gamepad2, { className: "w-5 h-5" }),
    details: ["Action / Adventure", "Roguelikes", "Metroidvania"]
  }
];
