import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ItemsLinks = NavItemLinkProps;

export interface NavItemLinkProps {
  title: string;
  imgSrc: string;
  linkUrl: string;
}

const NavItemLink = ({ imgSrc, title, linkUrl }: NavItemLinkProps) => {
  return (
    <div className="flex items-center space-x-3 p-4">
      <div className="w-8 h-8 relative">
        <Image
          className="w-full h-full"
          src={imgSrc}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <Link href={linkUrl} className="text-sm font-bold whitespace-nowrap">
        {title}
      </Link>
    </div>
  );
};

export default NavItemLink;
