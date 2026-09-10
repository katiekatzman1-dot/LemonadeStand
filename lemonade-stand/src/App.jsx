import { useState, useMemo, useEffect, useRef } from "react";
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
    accent: PALETTE.berry,
  },
  {
    id: 4,
    kid: "Owen, age 12",
    name: "Owen's Backyard Honey",
    tagline: "From our three hives, strained twice, jarred by hand",
    price: 9,
    unit: "jar",
    emoji: "🍯",
    accent: PALETTE.lemonDeep,
  },
  {
    id: 5,
    kid: "Lila, age 7",
    name: "Lila's Painted Rocks",
    tagline: "Every rock is a tiny animal, googly eyes included",
    price: 2,
    unit: "rock",
    emoji: "🎨",
    accent: PALETTE.leaf,
  },
  {
    id: 6,
    kid: "Dev, age 13",
    name: "Dev's Sourdough Loaves",
    tagline: "Starter named Kevin, baked fresh every Saturday",
    price: 7,
    unit: "loaf",
    emoji: "🍞",
    accent: PALETTE.kraftDark,
  },
];

function HomePage({ onEnter }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 130px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
      }}
    >
      <div style={{ maxWidth: 640, textAlign: "center" }}>
        <div style={{ fontSize: 46, marginBottom: 18 }}>🍋</div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5.5vw, 52px)",
            color: PALETTE.ink,
            margin: "0 0 18px",
            lineHeight: 1.08,
          }}
        >
          Every kid has a stand.
          <br />
          This is where it lives online.
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16.5,
            lineHeight: 1.65,
            color: "#5A5340",
            margin: "0 auto 14px",
            maxWidth: 480,
          }}
        >
          Lemonade Stand is a marketplace built for kids selling things they
          actually made — lemonade, bracelets, birdhouses, whatever they're
          proud of. Families list what they're selling, neighbors buy
          directly from them, and every sale belongs to the kid who made it.
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16.5,
            lineHeight: 1.65,
            color: "#5A5340",
            margin: "0 auto 34px",
            maxWidth: 480,
          }}
        >
          There's also a private ledger for tracking what materials cost,
          what to charge, and what's actually left over — a small,
          hands-on way to learn what running a stand really means.
        </p>
        <button
          onClick={onEnter}
          style={{
            background: PALETTE.ink,
            color: PALETTE.paper,
            border: "none",
            padding: "14px 30px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 15,
