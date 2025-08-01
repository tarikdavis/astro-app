"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MenuIcon, House } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar5 = () => {

  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>

            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">
              <House className="mr-1" /><a href="/">Home</a>
            </Button>
            <Button variant="outline">
              <FaLinkedin className="mr-1" /><a href="https://www.linkedin.com/in/tarikdavis">Connect on linkedin</a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <div className="flex flex-col p-4">

                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">
                    <House className="mr-1" /><a href="/">Home</a>
                  </Button>
                  <Button variant="outline">
                    <FaLinkedin className="mr-1" /><a href="https://www.linkedin.com/in/tarikdavis">Connect on linkedin</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
