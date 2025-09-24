import React from "react";
import Link from "next/link";
import Image from "next/image";

import DexScanItem from "./NavCustomItems/DexScanItem";
import CryptoNavItem from "./NavCustomItems/CryptoNavItem";
import ExchangesItem from "./NavCustomItems/ExchangesItem";

const Header = () => {
  return (
    <header className="w-full grid grid-cols-2 px-4 h-16">
      {/* LeftSide Component */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <Link href="/" className="relative inline-block w-40 h-full">
          <Image
            src="/coinmarketcap_logo.png"
            alt="Welcome to the home page"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 h-full">
          <CryptoNavItem />
          <DexScanItem />
          <ExchangesItem />
        </nav>
      </div>

      {/* RightSide Component */}
      <div></div>
    </header>
  );
};

export default Header;
