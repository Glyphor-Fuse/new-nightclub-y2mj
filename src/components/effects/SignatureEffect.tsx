import React from 'react';
import { motion } from 'framer-motion';

type EffectType = 'glass-panel' | 'btn-glow' | 'text-outline';

interface SignatureEffectProps {
  effect: EffectType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'button' | 'span';
}

export const SignatureEffect = ({ effect, children, className = '', onClick, as = 'div' }: SignatureEffectProps) => {
  const Component = motion[as] as any;

  if (effect === 'glass-panel') {
    return (
      <Component
        className={`bg-white/5 backdrop-blur-md border border-white/5 ${className}`}
        onClick={onClick}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      >
        {children}
      </Component>
    );
  }

  if (effect === 'btn-glow') {
    return (
      <Component
        className={`relative overflow-hidden transition-all duration-300 ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </Component>
    );
  }

  if (effect === 'text-outline') {
    return (
      <span 
        className={`text-transparent transition-all duration-500 ${className}`}
        style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
      >
        {children}
      </span>
    );
  }

  return <Component className={className}>{children}</Component>;
};
