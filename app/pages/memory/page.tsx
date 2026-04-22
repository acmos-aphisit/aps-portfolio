import { Navbar } from "../../components/layout/Navbar"
import { NavbarRetro } from "../../components/layout/NavBarRetro"

export default function PlayerPage() {
  return (
    <div className="bg-retro-gray p-10">
      <Navbar />
      <div className="bg-retro-gray p-10">
        <div className="bg-white border-4 border-retro-black p-6 shadow-pixel hover:shadow-pixel-hover transition-all">
          <h2 className="font-retro text-mint-green text-2xl">
            QUEST START!
          </h2>
          <p className="animate-pixel-blink">Press any key...</p>
        </div>
      </div>
    </div>
  );
}