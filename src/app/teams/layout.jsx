import localFont from "next/font/local";

const sora = localFont({
  src: "../fonts/Sora-VariableFont_wght.ttf",
  weight: "100 800",
  variable: "--font-sora",
});

// Personal-use license only; see fonts/Terms of Use End User Lisence Agreement.txt
const greatDay = localFont({
  src: "../fonts/Great Day Personal Use.ttf",
  variable: "--font-great-day",
});

// Matches the standalone app: the mobile browser chrome takes the card's own
// dark colour rather than the marketing site's.
export const viewport = {
  themeColor: "#080405",
};

// The cards are their own full-screen world: Sora and Great Day instead of the
// marketing site's fonts, and no footer or floating buttons (they live in the
// (site) route group, which the cards sit outside of).
export default function TeamsLayout({ children }) {
  return (
    <div className={`${sora.variable} ${greatDay.variable} teams-root font-card`}>
      {children}
    </div>
  );
}
