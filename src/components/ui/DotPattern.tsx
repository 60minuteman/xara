'use client';

import { useId } from "react";
import { ny } from "@/lib/utils";
import { motion, SVGMotionProps } from "framer-motion";

interface DotPatternProps extends SVGMotionProps<SVGSVGElement> {
   width?: number
   height?: number
   x?: number
   y?: number
   cx?: number
   cy?: number
   cr?: number
   className?: string
   fill?: string
}

export function DotPattern({
   width = 16,
   height = 16,
   x = 0,
   y = 0,
   cx = 1,
   cy = 1,
   cr = 1,
   className,
   fill = "currentColor",
   ...props
}: DotPatternProps) {
   const id = useId();

   return (
      <motion.svg
         aria-hidden="true"
         className={ny(
            "pointer-events-none absolute inset-0 h-full w-full",
            className,
         )}
         {...props}
         animate={{
           y: [0, -height],
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: "linear",
           repeatType: "loop"
         }}
      >
         <defs>
            <pattern
               id={id}
               width={width}
               height={height}
               patternUnits="userSpaceOnUse"
               patternContentUnits="userSpaceOnUse"
               x={x}
               y={y}
            >
               <circle 
                  id="pattern-circle" 
                  cx={cx} 
                  cy={cy} 
                  r={cr} 
                  fill={fill}
               />
            </pattern>
         </defs>
         <rect
            width="100%"
            height={`calc(100% + ${height}px)`}
            strokeWidth={0}
            fill={`url(#${id})`}
         />
      </motion.svg>
   );
}