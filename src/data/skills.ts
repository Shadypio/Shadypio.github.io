import React from "react";
import { Atom, Triangle, Diamond, ShieldHalf, Hexagon, Server } from "lucide-react";
import { Skill } from "../types";

export const skills: Skill[] = [
  { name: "React", icon: React.createElement(Atom, { className: "w-5 h-5" }) },
  { name: "Next.js", icon: React.createElement(Triangle, { className: "w-5 h-5" }) },
  { name: "Vue", icon: React.createElement(Diamond, { className: "w-5 h-5" }) },
  { name: "Angular", icon: React.createElement(ShieldHalf, { className: "w-5 h-5" }) },
  { name: "GraphQL", icon: React.createElement(Hexagon, { className: "w-5 h-5" }) },
  { name: "Node.js", icon: React.createElement(Server, { className: "w-5 h-5" }) },
];
