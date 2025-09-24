import React from "react";

import { ItemsLinks } from "../NavItemLink";

import NavItem from "../NavItem";
import NavItemGroup from "../NavItemGroup";

const cryptoItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuCmcIconV3.svg",
    title: "Ranking",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuCategoriesIconV3.svg",
    title: "Categories",
    linkUrl: "/crypto-category",
  },
  {
    imgSrc: "/icons/MenuHistoryIconV3.svg",
    title: "Historical Snapshots",
    linkUrl: "/historical",
  },
  {
    imgSrc: "/icons/MenuTokenUnlocksIconV2.svg",
    title: "Token Unlocks",
    linkUrl: "/token-unlocks",
  },
  {
    imgSrc: "/icons/MenuYieldIconV2.svg",
    title: "Yield",
    linkUrl: "/yield",
  },
  {
    imgSrc: "/icons/MenuRealWorldAssetsIcon.svg",
    title: "Real World Assets",
    linkUrl: "/real-world-assets",
  },
];

const leaderBoardsItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuTrendingIconV3.svg",
    title: "Trending",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuUpcomingIconV3.svg",
    title: "Upcoming",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuRecentlyAddedIconV3.svg",
    title: "Recently Added",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuGainersLosersIconV3.svg",
    title: "Gainers & Losers",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuMostVisitedV3.svg",
    title: "Most Visited",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuCommunitySentiment.svg",
    title: "Community Sentiment",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuChainRankingV4.svg",
    title: "Chain Ranking",
    linkUrl: "/",
  },
];

const marketOverviewItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuMarketOverviewIcon.svg",
    title: "Market Overview",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuCMC20Icon.svg",
    title: "CoinMarketCap 20 Index",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuCMC100Icon.svg",
    title: "CoinMarketCap 100 Index",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuFearGreedIndexIcon.svg",
    title: "Fear and Greed Index",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuAltcoinIndexIcon.svg",
    title: "Altcoin Season Index",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuBitcoinDominance.svg",
    title: "Bitcoin Dominance",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuBitcoinETFsIconV3.svg",
    title: "Crypto ETFs",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuMktCycle.svg",
    title: "Market Cycle Indicators",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuRSI.svg",
    title: "Relative Strength Index (RSI)",
    linkUrl: "/",
  },
];

const treasuriesItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuBitcoinTreasuries.svg",
    title: "Bitcoin Treasuries",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuBNBTreasuries.svg",
    title: "BNB Treasuries",
    linkUrl: "/",
  },
];

const nftItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuNFTOverviewV3.svg",
    title: "Overall NFT Stats",
    linkUrl: "/",
  },
  {
    imgSrc: "/icons/MenuUpcomingSales.svg",
    title: "Upcoming Sales",
    linkUrl: "/",
  },
];

const CryptoNavItem = () => {
  return (
    <NavItem title="Cryptocurrencies">
      <div className="p-8">
        <div className="grid grid-cols-4 gap-4 divide-x divide-gray-500 w-6xl">
          <NavItemGroup title="Cryptocurrencies" items={cryptoItems} />
          <NavItemGroup title="Leaderboards" items={leaderBoardsItems} />
          <NavItemGroup title="Market Overview" items={marketOverviewItems} />

          <div className="flex flex-col space-y-4">
            <NavItemGroup title="Treasuries" items={treasuriesItems} />
            <NavItemGroup title="NFT" items={nftItems} />
          </div>
        </div>
      </div>
    </NavItem>
  );
};

export default CryptoNavItem;
