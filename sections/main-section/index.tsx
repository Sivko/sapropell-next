"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function MainSection() {
  const t = useTranslations('main');
  
  return (
    <div className="mt-20">
      <div className="mx-content">
        <div className="flex items-end">
          <motion.div
            className="w-60"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-green-300 w-7 h-7 rounded-full" />
            <span>{t('logo')}</span>
          </motion.div>
          <div className="flex-1">
            <h1 className="text-7xl font-light relative">
              {t('title').split("").map((el, i) => (
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i / 50,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  key={i}
                >
                  {el === " " ? "\u00A0" : el}
                </motion.span>
              ))}
              <br />
              <motion.div
                className="inline-block absolute bottom-0 text-[#00000000] z-[-1] bg-brand rounded-2xl"
                initial={{ width: 0, y: 10 }}
                animate={{ width: "inherit", y: 10 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                {t('subtitle').split(' - ')[0]}
              </motion.div>
              {t('subtitle').split("").map((el, i) => (
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i / 50,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  key={i}
                >
                  {el === " " ? "\u00A0" : el}
                </motion.span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
