import React from "react";

import NavItemLink, { ItemsLinks } from "./NavItemLink";

export interface NavItemGroupProps {
  title?: string;
  items?: ItemsLinks[];
}

const NavItemGroup = ({ title, items }: NavItemGroupProps) => {
  return (
    <div className="flex flex-col space-y-6 w-full">
      {title ? <p className="text-gray-400 font-bold w-full">{title}</p> : null}
      <div className="flex flex-col w-full">
        {items?.map((/**ItemProps*/ ip, idx) => {
          return (
            <NavItemLink key={idx + ip.imgSrc + idx + ip.title + idx} {...ip} />
          );
        })}
      </div>
    </div>
  );
};

export default NavItemGroup;
