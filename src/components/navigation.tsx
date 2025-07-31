"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "https://www.linkedin.com/in/tarikdavis/",
  src: "https://github.com/tarikdavis/astro-app/blob/main/src/img/icons8-linkedin.svg?raw=true",
  alt: "Linkedin icon",
  title: "Lets connect on LinkedIn",
};
const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Latest work", link: "/latest-work" },
  { name: "Get in touch", link: "/contact" },
];

const Navbar17 = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Sync activeItem with current URL
  useEffect(() => {
    const updateActiveItem = () => {
      const currentPath = window.location.pathname;
      const matchedItem = NAV_ITEMS.find(
        (item) => item.link === currentPath
      )?.name || NAV_ITEMS[0].name;
      setActiveItem(matchedItem);
    };

    updateActiveItem(); // Run on mount
    window.addEventListener("popstate", updateActiveItem); // Handle browser back/forward

    return () => window.removeEventListener("popstate", updateActiveItem);
  }, []);

  // Update underline position based on activeItem
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4">
      <nav className="container flex items-center justify-between">
        {/* Left WordMark */}
        <a href={NAV_LOGO.url} className="flex items-center gap-2">
          <img src={NAV_LOGO.src} className="max-h-8 w-8" alt={NAV_LOGO.alt} />
          <span className="text-lg font-semibold tracking-tighter">
            {NAV_LOGO.title}
          </span>
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  data-nav-item={item.name}
                  href={item.link}
                  onClick={() => setActiveItem(item.name)}
                  className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                    activeItem === item.name
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </nav>
    </section>
  );
};

export { Navbar17 };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <a
                  href={navItem.link}
                  onClick={() => setActiveItem(navItem.name)}
                  className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};