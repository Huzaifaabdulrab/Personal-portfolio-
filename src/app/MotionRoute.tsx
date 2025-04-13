"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MotionLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 1500);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isAnimating && (
                    <motion.div
                        key={pathname + "-transition"}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: 20,
                            opacity: 0,
                        }}
                        exit={{
                            scale: 20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex justify-center items-center"
                    >
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                            </motion.div>
                            <motion.span
                                className="text-[#091057] text-[40px] font-semibold tracking-wider"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                            >
                                Muhammad Huzaifa Abdulrab
                            </motion.span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isAnimating && (
                <div className="relative z-0">{children}</div>
            )}
        </>
    );
}
