import { useState, useMemo, useEffect } from "react";
import { supabase } from "./supabaseClient";

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@500&display=swap";

const PALETTE = {
  paper: "#FFF8E7",
  ink: "#2A2418",
  lemon: "#F5C518",
  lemonDeep: "#E0A310",
  berry: "#E8547C",
  leaf: "#4F7F52",
  leafDeep: "#3C6640",
  kraft: "#B08D57",
  kraftDark: "#8A6B3E",
  card: "#FFFDF5",
};

const STALLS = [
  {
    id: 1,
    kid: "Maya, age 9",
    name: "Maya's Marble Lemonade",
    tagline: "Fresh-squeezed, stirred with a wooden spoon my grandpa made",
    price: 3,
    unit: "cup",
    emoji: "🍋",
    accent: PALETTE.lemon,
  },
  {
    id: 2,
    kid: "Theo & Sam, ages 11 & 8",
    name: "Twig Fort Birdhouses",
    tagline: "Built from fallen branches in our backyard, no two alike",
    price: 12,
    unit: "birdhouse",
    emoji: "🏡",
    accent: PALETTE.kraft,
  },
  {
    id: 3,
    kid: "Priya, age 10",
    name: "Priya's Friendship Bracelets",
    tagline: "Pick your colors, I'll knot it while you wait",
    price: 4,
    unit: "bracelet",
    emoji: "🧵",
    accent:
