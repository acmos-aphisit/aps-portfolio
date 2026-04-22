export default function PlayerPage() {
  return (
    <main className="p-8">
      {/* ミントグリーンの枠線で囲った見出し */}
      <div className="border-4 border-retro-black p-4 bg-white shadow-pixel inline-block mb-8">
        <h1 className="text-2xl font-bold text-retro-black uppercase">
          Player Status: LV.99
        </h1>
      </div>

      <div className="grid gap-6">
        {/* ステータス画面風のカード */}
        <section className="bg-white border-2 border-retro-black p-6">
          <h2 className="text-mint-green font-bold mb-4 drop-shadow-[1px_1px_0px_#000]">EQUIPMENT</h2>
          <p>Main: MacBook Pro M1 (2020)</p>
          <p>OS: Rocky Linux 9 (WSL2)</p>
        </section>
      </div>
    </main>
  );
}