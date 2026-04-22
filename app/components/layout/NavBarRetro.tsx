"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'MEMORY', path: '/memory', label: '記録' },
  { name: 'QUESTS', path: '/quests', label: '任務' },
  { name: 'PLAYER', path: '/player', label: '能力' },
  { name: 'LOGS', path: '/achievements', label: '戦績' },
];

export const NavbarRetro = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-retro-gray p-4 flex justify-center">
      <div className="flex gap-2 bg-retro-black p-2 border-4 border-gray-400 shadow-pixel">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <div className={`
                relative px-6 py-2 cursor-pointer transition-all duration-75
                border-2 font-bold text-sm sm:text-base
                ${isActive 
                  ? 'bg-mint-green text-retro-black border-white -translate-y-1 shadow-[0_4px_0_0_#7ED9B1]' 
                  : 'bg-gray-700 text-gray-300 border-transparent hover:bg-gray-600 hover:text-white'
                }
              `}>
                <span className="flex flex-col items-center">
                  <span className="text-[10px] opacity-70 mb-1">{item.name}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* 選択中の「ピコピコ」光るインジケーター（任意） */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-pulse" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};