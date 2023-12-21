"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface ItemProps {
  href?: string;
  text?: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "font-bold flex flex-row item-center px-4 py-2 gap-1 bg-white hover:bg-zinc-200 rounded-md",
          pathName === href && "bg-zinc-200 dropdown-shadow-xl"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="container py-4">
      <ul className="flex">
        <li className="mb-1">
          <Item href={"/"} text="Home" />
        </li>
        <li className="mb-1">
          <Item href={"/about"} text="About" />
        </li>
        <li className="mb-1">
          <Item href={"/guestbook"} text="Guest Book" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
