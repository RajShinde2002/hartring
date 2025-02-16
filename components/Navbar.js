"use client";

import Link from "next/link";
import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 mt-[5vh]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-2xl bg-white/30 rounded-full backdrop-blur-md">
          <img
            src="/HART.svg"
            className="z-10 w-32 h-16 py-[6px] px-6"
            alt="Hart Logo"
          />
        </div>

        <div className="flex items-center gap-8 p-2 rounded-full bg-white/30 backdrop-blur-md">
          <Link
            href="/talk-to-expert"
            className="hidden items-center gap-2 text-white hover:opacity-90 lg:flex px-3"
          >
            <Headphones className="h-5 w-5" />
            <span>Talk to an expert</span>
          </Link>
          <Button
            asChild
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-white/90"
          >
            <Link href="/buy">Buy X2</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
