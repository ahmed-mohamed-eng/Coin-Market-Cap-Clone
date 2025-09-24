import React from "react";

import NavItem from "../NavItem";
import NavItemGroup from "../NavItemGroup";

import { ItemsLinks } from "../NavItemLink";

const items: ItemsLinks[] = [
  {
    imgSrc: "/icons/feed.svg",
    linkUrl: "/community",
    title: "Feeds",
  },
  {
    imgSrc: "/icons/lives.svg",
    linkUrl: "/community/lives",
    title: "Lives",
  },
  {
    imgSrc: "/icons/articles.svg",
    linkUrl: "/community/articles",
    title: "Articles",
  },
  {
    imgSrc: "/icons/MenuCommunitySentiment.svg",
    linkUrl: "/sentiment",
    title: "Sentiment",
  },
];

const CommunityItem = () => {
  return (
    <NavItem title="Exchanges">
      <div className="p-4">
        <NavItemGroup items={items} />
      </div>
    </NavItem>
  );
};

export default CommunityItem;
