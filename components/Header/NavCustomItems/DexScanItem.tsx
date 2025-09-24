import React from "react";

import NavItem from "../NavItem";
import NavItemGroup from "../NavItemGroup";
import { ItemsLinks } from "../NavItemLink";

const items: ItemsLinks[] = [
  {
    imgSrc: "/icons/DexScanSignals.svg",
    linkUrl: "/signals/all",
    title: "Signals",
  },
  {
    imgSrc: "/icons/DexScanTrendingPairs.svg",
    linkUrl: "/token/all",
    title: "Trending",
  },
  {
    imgSrc: "/icons/DexScanNewPairs.svg",
    linkUrl: "/token/all?tableRankBy=new_24h",
    title: "New",
  },
  {
    imgSrc: "/icons/DexScanSignals.svg",
    linkUrl: "/token/all?tableRankBy=gainers_24h",
    title: "Gainers",
  },
  {
    imgSrc: "/icons/DexScanMemeExplorer.svg",
    linkUrl: "/meme/pump.fun",
    title: "Meme Explorer",
  },
  {
    imgSrc: "/icons/DexScanTopTraders.svg",
    linkUrl: "/top-traders/all",
    title: "Top Traders",
  },
];

const DexScanItem = () => {
  return (
    <NavItem title="DexScan">
      <NavItemGroup items={items} />
    </NavItem>
  );
};

export default DexScanItem;
