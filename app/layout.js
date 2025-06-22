import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Agent Shelf - AI Tools for Real Estate Agents",
  description:
    "Your resource for the latest AI tools and technology to help real estate agents work more efficiently and serve clients better.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
