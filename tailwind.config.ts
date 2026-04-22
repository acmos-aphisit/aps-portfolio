// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // 以下の行を特に確認してください
    "./app/**/*.{js,ts,jsx,tsx,mdx}",         // app直下のpagesなども含む
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",     // src/appを使っている場合
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-gray': '#F5F5F5',    // 背景用
        'mint-green': '#AAF0D1',   // メイン色
        'retro-black': '#333333',  // テキスト・枠線用
      },
      // ドット絵のような硬い影
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
};
export default config;