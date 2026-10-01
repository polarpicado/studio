"use client";

import React, { useState } from "react";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/context/language-context";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { dictionary } = useLanguage();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    setIsSheetOpen(false);
    smoothScrollTo(href);
  };

  const navLinks = (
    <>
      {dictionary.header.nav.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a
            href="#"
            className="mr-6 flex items-center space-x-2"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <span className="font-bold tracking-tight text-foreground">
              Joao Basanta
            </span>
          </a>
        </div>
        {isMobile ? (
          <div className="flex flex-1 items-center justify-end gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="mt-8 flex flex-col gap-6">{navLinks}</nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="ml-auto flex items-center space-x-6 text-sm font-medium">
            {navLinks}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  const { setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
