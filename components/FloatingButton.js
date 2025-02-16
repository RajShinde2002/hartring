"use client";
import Link from "next/link";

const FloatingButton = () => {
  return (
    <Link
      href="/talk-to-expert"
      className="hidden items-center gap-2 text-white lg:flex px-3 fixed bottom-6 right-6 z-50 transition-transform duration-200"
    >
      <img src="/headset.png" className="w-10 h-10" />
    </Link>
  );
};

export default FloatingButton;
