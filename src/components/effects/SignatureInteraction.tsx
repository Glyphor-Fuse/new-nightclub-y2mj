import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type InteractionType = 'parallax' | 'text-reveal' | 'clip-reveal' | 'sticky-progress' | 'marquee';

interface SignatureInteractionProps {
  type: InteractionType;
  children?: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction = ({ type, children, className = '', speed = 0.5 }: SignatureInteractionProps) => {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const { scrollYProgress: elementScrollProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'sticky-progress') {
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-[100] ${className}`}
        style={{ scaleX }}
      />
    );
  }

  if (type === 'parallax') {
    const y = useTransform(scrollY, [0, 1000], [0, 500 * speed]);
    return (
      <motion.div ref={ref} style={{ y }} className={className}>
        {children}
      </motion.div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'clip-reveal') {
    return (
      <motion.div
        ref={ref}
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
