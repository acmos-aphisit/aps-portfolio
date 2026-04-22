import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // ブラウザに表示されるURL
        source: '/player',
        // 実際に読みに行くファイルのパス
        destination: '/pages/player',
      },
      {
        source: '/memory',
        destination: '/pages/memory',
      },
      // 他のパスも同様に追加できます
    ];
  },
};

export default nextConfig;
