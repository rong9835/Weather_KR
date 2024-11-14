import React from "react";
import { Cloud, DivideSquare } from "lucide-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="w-full h-20 flex items-center p-6 gap-6">
        <div className="flex items-center p-6 gap-6">
          <Cloud className="w-10 h-10" />
          <div className="test-2xl">Weather.io</div>
          <div>검색입력창</div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
