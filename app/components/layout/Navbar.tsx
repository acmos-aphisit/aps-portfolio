import Link from 'next/link';

const navItems = [
  { name: 'MEMORY', path: '/memory' },
  { name: 'QUESTS', path: '/quests' },
  { name: 'PLAYER', path: '/player' },
  { name: 'LOGS', path: '/achievements' },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-retro-black text-gray font-mono border-b-2 border-gray-400">

      {/* 左側：APS Version (左端に固定) */}
      <div className="text-xs opacity-70 w-48">
        APS Version 1.0.0
      </div>

      {/* 中央：ナビゲーションリンク (画面の真ん中) */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="hover:text-mint-green transition-colors flex items-center group"
          >
            <span className="mr-1 text-mint-green opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
            <span className="uppercase font-retro">[{item.name}]</span>
          </Link>
        ))}
      </div>

      {/* 右側：バランス調整用の空要素 (これがあると中央がズレない) */}
      <div className="w-48 hidden md:block"></div>

    </nav>
  );
};