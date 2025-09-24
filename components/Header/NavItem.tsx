"use client";

import React, { ReactElement } from "react";

export interface NavItemProps {
  title: string;
  children?: ReactElement | ReactElement[] | string;
}

const NavItem = ({ title, children }: NavItemProps) => {
  return (
    <div className="relative group">
      <p className="font-semibold cursor-pointer whitespace-nowrap">{title}</p>
      <div className="transition-all duration-200 ease-in absolute left-0 border rounded-md bg-white opacity-0 -z-50 group-hover:z-50 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
};

export default NavItem;
