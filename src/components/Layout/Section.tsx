import { useState } from 'react';
import {
  motion,
  type Transition,
  type TargetAndTransition,
} from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: Transition;
  viewport?: { amount?: number | 'some' | 'all' };
  alt?: string;
  id?: string;
}

export function Section({
  children,
  initial,
  animate,
  transition,
  viewport,
  alt,
  id,
}: SectionProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const defaultInitial: TargetAndTransition = {
    opacity: 0,
    y: 10,
    filter: 'blur(3px)',
  };
  const defaultAnimate: TargetAndTransition = {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  };

  return (
    <motion.section
      id={id ?? undefined}
      className={alt ? `section_wrapper ${alt}` : 'section_wrapper'}
      onViewportEnter={() => setVisible(true)}
      viewport={viewport ?? { amount: 0.75 }}>
      <motion.section
        className="section"
        initial={initial ?? defaultInitial}
        animate={
          visible ? (animate ?? defaultAnimate) : (initial ?? defaultInitial)
        }
        transition={transition}>
        {children}
      </motion.section>
    </motion.section>
  );
}
