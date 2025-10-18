"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/language-switcher';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  
  const animateObject = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1 },
  };
  return (
    <div className="mx-content pt-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center">
          <motion.div
            className="flex items-center gap-2 w-60"
            {...animateObject}
          >
            <Icon icon="guidance:garden" className="text-xl" />
            <span>{t('logo')}</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <Link href={`/${locale}`} className="">
              <motion.div
                className="flex items-center gap-2 rounded-2xl bg-brand py-1 px-2"
                {...animateObject}
              >
                <span>{t('home')}</span>
                <div className="p-1 bg-white rounded-full w-7 h-7">
                  <Icon icon="mdi-light:home" className="text-xl" />
                </div>
              </motion.div>
            </Link>
            <Link href={`/${locale}`} className="">
              <motion.div
                className="flex items-center gap-2 rounded-2xl bg-gray-300 py-1 px-2"
                {...animateObject}
              >
                <div className="p-1 bg-white rounded-full w-7 h-7">
                  <Icon icon="mdi-light:home" className="text-xl" />
                </div>
                <span>{t('home')}</span>
              </motion.div>
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <motion.button
            {...animateObject}
            className="bg-primary text-white rounded-2xl p-2"
          >
            {t('contact')}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
