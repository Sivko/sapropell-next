import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="mx-content pt-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center">
          <div className="flex items-center gap-2 w-60">
            <Icon icon="guidance:garden" className="text-xl" />
            <span>Волга</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-2xl bg-brand py-1 px-2"
            >
              <span>Главная</span>
              <div className="p-1 bg-white rounded-full w-7 h-7">
                <Icon icon="mdi-light:home" className="text-xl" />
              </div>
            </Link>
            {/* <Link href="#about">About</Link> */}
            {/* <Link href="/">Contact</Link> */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-2xl bg-gray-300 py-1 px-2"
            >
              <div className="p-1 bg-white rounded-full w-7 h-7">
                <Icon icon="mdi-light:home" className="text-xl" />
              </div>
              <span>Главная</span>
            </Link>
          </div>
        </nav>
        <button className="bg-primary text-white rounded-2xl p-2">
          Связаться
        </button>
      </div>
    </div>
  );
}
