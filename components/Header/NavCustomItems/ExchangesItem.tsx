import React from "react";

import NavItem from "../NavItem";
import NavItemGroup from "../NavItemGroup";

import { ItemsLinks } from "../NavItemLink";

const centralizedItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuSpotIcon.svg",
    linkUrl: "/ranking/exchanges",
    title: "Spot",
  },
  {
    imgSrc: "/icons/MenuDerivativesIcon.svg",
    linkUrl: "/exchanges/derivatives",
    title: "Derivatives",
  },
];

const decentralizedItems: ItemsLinks[] = [
  {
    imgSrc: "/icons/MenuDexSpotIcon.svg",
    linkUrl: "/rankings/exchanges/dex/?type=spot",
    title: "Spot",
  },
  {
    imgSrc: "/icons/MenuDexDerivativesIcon.svg",
    linkUrl: "/rankings/exchanges/dex/?type=derivatives",
    title: "Derivatives",
  },
];

const ExchangesItem = () => {
  return (
    <NavItem title="Exchanges">
      <div className="p-4">
        <div className="flex flex-col">
          <NavItemGroup
            title="Centralized Exchanges"
            items={centralizedItems}
          />
          <NavItemGroup
            title="Decentralized Exchanges"
            items={decentralizedItems}
          />
        </div>
      </div>
    </NavItem>
  );
};

export default ExchangesItem;
