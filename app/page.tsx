import { AboutUs } from "./components/about";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { RoadMap } from "./components/roadmap";
import { ShopUs } from "./components/shopus";
import { Summary } from "./components/summary";
import { Tokenomics } from "./components/tokenomics";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Summary />
      <AboutUs />
      <ShopUs />
      <Tokenomics />
      <RoadMap />
      <Footer />
    </div>
  );
}
