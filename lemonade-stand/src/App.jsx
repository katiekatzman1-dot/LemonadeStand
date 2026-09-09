import { useState, useMemo, useEffect } from "react";

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
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = PALETTE.lemonDeep)}
          onMouseLeave={(e) => (e.currentTarget.style.background = PALETTE.ink)}
        >
          Visit the marketplace
        </button>
      </div>
    </div>
  );
}

function ZigTop({ color }) {
  return (
    <div
      style={{
        height: 14,
        background: color,
        clipPath:
          "polygon(0% 100%, 0% 0%, 8.33% 100%, 16.66% 0%, 25% 100%, 33.33% 0%, 41.66% 100%, 50% 0%, 58.33% 100%, 66.66% 0%, 75% 100%, 83.33% 0%, 91.66% 100%, 100% 0%, 100% 100%)",
      }}
    />
  );
}

function StallCard({ stall, onBuy, boughtCount }) {
  return (
    <div
      style={{
        background: PALETTE.card,
        border: `2px solid ${PALETTE.ink}`,
        borderTop: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ZigTop color={stall.accent} />
      <div style={{ padding: "18px 18px 20px" }}>
        <div style={{ fontSize: 34, lineHeight: 1, marginBottom: 10 }}>
          {stall.emoji}
        </div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 19,
            margin: "0 0 4px",
            color: PALETTE.ink,
          }}
        >
          {stall.name}
        </h3>
        <p
          style={{
            fontSize: 12.5,
            color: PALETTE.kraftDark,
            fontWeight: 500,
            margin: "0 0 10px",
          }}
        >
          {stall.kid}
        </p>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#4A4433",
            margin: "0 0 16px",
            minHeight: 42,
          }}
        >
          {stall.tagline}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 17,
              fontWeight: 500,
              color: PALETTE.ink,
            }}
          >
            ${stall.price.toFixed(2)}{" "}
            <span style={{ fontSize: 12, color: PALETTE.kraftDark }}>
              / {stall.unit}
            </span>
          </span>
          <button
            onClick={() => onBuy(stall.id)}
            style={{
              background: PALETTE.ink,
              color: PALETTE.paper,
              border: "none",
              padding: "9px 16px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = stall.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.background = PALETTE.ink)}
          >
            Add to basket
          </button>
        </div>
        {boughtCount > 0 && (
          <p
            style={{
              fontSize: 12,
              color: PALETTE.leafDeep,
              fontWeight: 700,
              margin: "10px 0 0",
            }}
          >
            {boughtCount} in your basket
          </p>
        )}
      </div>
    </div>
  );
}

function Marketplace() {
  const [basket, setBasket] = useState({});
  const totalItems = Object.values(basket).reduce((a, b) => a + b, 0);
  const totalCost = STALLS.reduce(
    (sum, s) => sum + (basket[s.id] || 0) * s.price,
    0
  );

  const buy = (id) =>
    setBasket((b) => ({ ...b, [id]: (b[id] || 0) + 1 }));

  return (
    <div>
      <section
        style={{
          padding: "56px 24px 44px",
          textAlign: "center",
          borderBottom: `2px solid ${PALETTE.ink}`,
        }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(34px, 6vw, 56px)",
            color: PALETTE.ink,
            margin: "0 0 14px",
            lineHeight: 1.05,
          }}
        >
          Real stuff, made by real kids
          <br />
          on their own street.
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: "#5A5340",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Every stand here is run by the kid whose name is on it. Buy
          directly from them, and every dollar goes straight into their
          jar.
        </p>
      </section>

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "36px 24px 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 24,
        }}
      >
        {STALLS.map((s) => (
          <StallCard
            key={s.id}
            stall={s}
            onBuy={buy}
            boughtCount={basket[s.id] || 0}
          />
        ))}
      </div>

      {totalItems > 0 && (
        <div
          style={{
            position: "sticky",
            bottom: 0,
            background: PALETTE.ink,
            color: PALETTE.paper,
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ fontSize: 14 }}>
            {totalItems} item{totalItems > 1 ? "s" : ""} in basket
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            ${totalCost.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}

function GateScreen({ onSubscribe }) {
  return (
    <div
      style={{
        maxWidth: 460,
        margin: "70px auto",
        padding: "36px 32px",
        background: PALETTE.card,
        border: `2px solid ${PALETTE.ink}`,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 10 }}>📒</div>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 24,
          color: PALETTE.ink,
          margin: "0 0 10px",
        }}
      >
        The Stand Ledger is a subscriber tool
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14.5,
          lineHeight: 1.6,
          color: "#5A5340",
          margin: "0 0 24px",
        }}
      >
        Track what materials cost, what you charge, and what you actually
        take home — one row per product. This demo unlocks it for free.
      </p>
      <button
        onClick={onSubscribe}
        style={{
          background: PALETTE.leafDeep,
          color: PALETTE.paper,
          border: "none",
          padding: "12px 26px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Unlock my ledger
      </button>
    </div>
  );
}

function money(n) {
  return `$${n.toFixed(2)}`;
}

const LEDGER_KEY = "ledger:rows";
const DEFAULT_ROWS = [
  { id: 1, product: "Marble Lemonade", materialCost: 0.6, price: 3, sold: 14 },
  { id: 2, product: "Painted Rocks", materialCost: 0.4, price: 2, sold: 22 },
];

function Portal() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [form, setForm] = useState({
    product: "",
    materialCost: "",
    price: "",
    sold: "",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = window.localStorage.getItem(LEDGER_KEY);
        if (cancelled) return;
        const saved = raw ? JSON.parse(raw) : DEFAULT_ROWS;
        setRows(saved);
        setStatus("ready");
      } catch {
        if (cancelled) return;
        setRows(DEFAULT_ROWS);
        setStatus("ready");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const persist = async (next) => {
    setRows(next);
    try {
      window.localStorage.setItem(LEDGER_KEY, JSON.stringify(next));
    } catch {
      setStatus("error");
    }
  };

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => {
        const revenue = r.price * r.sold;
        const cost = r.materialCost * r.sold;
        acc.revenue += revenue;
        acc.cost += cost;
        acc.profit += revenue - cost;
        return acc;
      },
      { revenue: 0, cost: 0, profit: 0 }
    );
  }, [rows]);

  const addRow = () => {
    if (!form.product || form.materialCost === "" || form.price === "" || form.sold === "")
      return;
    const next = [
      ...rows,
      {
        id: Date.now(),
        product: form.product,
        materialCost: parseFloat(form.materialCost) || 0,
        price: parseFloat(form.price) || 0,
        sold: parseInt(form.sold) || 0,
      },
    ];
    persist(next);
    setForm({ product: "", materialCost: "", price: "", sold: "" });
  };

  const removeRow = (id) => persist(rows.filter((row) => row.id !== id));

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13.5,
    padding: "8px 10px",
    border: `1.5px solid ${PALETTE.kraft}`,
    background: PALETTE.paper,
    color: PALETTE.ink,
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "40px 24px 64px",
        backgroundImage:
          "linear-gradient(rgba(176,141,87,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.14) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 30,
          color: PALETTE.ink,
          margin: "0 0 6px",
        }}
      >
        My Stand Ledger
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: "#5A5340",
          margin: "0 0 30px",
        }}
      >
        Every product you sell, and what it actually earns after materials.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {[
          { label: "Money made", value: totals.revenue, color: PALETTE.ink },
          { label: "Spent on materials", value: totals.cost, color: PALETTE.berry },
          { label: "Take-home profit", value: totals.profit, color: PALETTE.leafDeep },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: PALETTE.card,
              border: `2px solid ${PALETTE.ink}`,
              padding: "16px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12.5,
                color: "#5A5340",
                fontWeight: 500,
                marginBottom: 6,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 26,
                fontWeight: 500,
                color: s.color,
              }}
            >
              {money(s.value)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ overflowX: "auto", marginBottom: 20 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: PALETTE.card,
            border: `2px solid ${PALETTE.ink}`,
          }}
        >
          <thead>
            <tr style={{ borderBottom: `2px solid ${PALETTE.ink}` }}>
              {["Product", "Cost per unit", "Price per unit", "Units sold", "Profit", ""].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "10px 14px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: PALETTE.ink,
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const profit = (r.price - r.materialCost) * r.sold;
              return (
                <tr key={r.id} style={{ borderBottom: `1px solid ${PALETTE.kraft}` }}>
                  <td style={{ padding: "10px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
                    {r.product}
                  </td>
                  <td style={{ padding: "10px 14px", fontFamily: "'DM Mono', monospace", fontSize: 13.5 }}>
                    {money(r.materialCost)}
                  </td>
                  <td style={{ padding: "10px 14px", fontFamily: "'DM Mono', monospace", fontSize: 13.5 }}>
                    {money(r.price)}
                  </td>
                  <td style={{ padding: "10px 14px", fontFamily: "'DM Mono', monospace", fontSize: 13.5 }}>
                    {r.sold}
                  </td>
                  <td
                    style={{
                      padding: "10px 14px",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: profit >= 0 ? PALETTE.leafDeep : PALETTE.berry,
                    }}
                  >
                    {money(profit)}
                  </td>
                  <td style={{ padding: "10px 14px" }}>
                    <button
                      onClick={() => removeRow(r.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: PALETTE.kraftDark,
                        cursor: "pointer",
                        fontSize: 12.5,
                        fontFamily: "'DM Sans', sans-serif",
                        textDecoration: "underline",
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: "22px 14px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13.5,
                    color: "#5A5340",
                    textAlign: "center",
                  }}
                >
                  No products yet. Add your first one below.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div
        style={{
          background: PALETTE.card,
          border: `2px solid ${PALETTE.ink}`,
          padding: "18px 18px 20px",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: PALETTE.ink,
            marginBottom: 12,
          }}
        >
          Add a product
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr auto",
            gap: 10,
            alignItems: "end",
          }}
        >
          <div>
            <label style={{ fontSize: 11.5, color: "#5A5340", fontFamily: "'DM Sans', sans-serif" }}>
              Product name
            </label>
            <input
              style={inputStyle}
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              placeholder="Painted rocks"
            />
          </div>
          <div>
            <label style={{ fontSize: 11.5, color: "#5A5340", fontFamily: "'DM Sans', sans-serif" }}>
              Cost / unit
            </label>
            <input
              style={inputStyle}
              type="number"
              step="0.01"
              value={form.materialCost}
              onChange={(e) => setForm({ ...form, materialCost: e.target.value })}
              placeholder="0.40"
            />
          </div>
          <div>
            <label style={{ fontSize: 11.5, color: "#5A5340", fontFamily: "'DM Sans', sans-serif" }}>
              Price / unit
            </label>
            <input
              style={inputStyle}
              type="number"
              step="0.01"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="2.00"
            />
          </div>
          <div>
            <label style={{ fontSize: 11.5, color: "#5A5340", fontFamily: "'DM Sans', sans-serif" }}>
              Units sold
            </label>
            <input
              style={inputStyle}
              type="number"
              value={form.sold}
              onChange={(e) => setForm({ ...form, sold: e.target.value })}
              placeholder="10"
            />
          </div>
          <button
            onClick={addRow}
            style={{
              background: PALETTE.ink,
              color: PALETTE.paper,
              border: "none",
              padding: "9px 16px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              height: 37,
            }}
          >
            Add
          </button>
        </div>
      </div>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          color: "#8A806A",
          marginTop: 18,
        }}
      >
        {status === "error"
          ? "Couldn't save your last change — it may not survive a reload."
          : "Your ledger saves automatically and will be here next time."}
      </p>
    </div>
  );
}

export default function LemonadeStand() {
  const [view, setView] = useState("home");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: PALETTE.paper,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('${FONT_IMPORT_URL}');`}</style>

      <header
        style={{
          borderBottom: `2px solid ${PALETTE.ink}`,
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          background: PALETTE.paper,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          onClick={() => setView("home")}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: PALETTE.ink,
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          <span>🍋</span> Lemonade Stand
        </div>
        <nav style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {[
            { key: "home", label: "Home" },
            { key: "market", label: "Marketplace" },
            { key: "portal", label: "My Stand Portal" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setView(t.key)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13.5,
                padding: "9px 16px",
                border: `2px solid ${PALETTE.ink}`,
                background: view === t.key ? PALETTE.ink : "transparent",
                color: view === t.key ? PALETTE.paper : PALETTE.ink,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {view === "home" ? (
        <HomePage onEnter={() => setView("market")} />
      ) : view === "market" ? (
        <Marketplace />
      ) : subscribed ? (
        <Portal />
      ) : (
        <GateScreen onSubscribe={() => setSubscribed(true)} />
      )}

      <footer
        style={{
          borderTop: `2px solid ${PALETTE.ink}`,
          padding: "20px 24px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12.5,
          color: "#8A806A",
        }}
      >
        Every stand is run by a kid. Every sale is real to them.
      </footer>
    </div>
  );
}
