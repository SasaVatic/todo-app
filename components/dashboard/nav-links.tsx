"use client";

import Link from "next/link";
import { Home, Hammer, Siren, Check } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "To Do",
    href: "/dashboard/to-do",
    icon: Siren,
  },
  {
    name: "In Progress",
    href: "/dashboard/in-progress",
    icon: Hammer,
  },
  {
    name: "Completed",
    href: "/dashboard/completed",
    icon: Check,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return links.map((link) => {
    const LinkIcon = link.icon;

    return (
      <Link
        key={link.name}
        href={link.href}
        className={clsx(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
          { "text-muted-foreground": link.href !== pathname }
        )}
      >
        <LinkIcon className="h-4 w-4" />
        {link.name}
      </Link>
    );
  });
}
