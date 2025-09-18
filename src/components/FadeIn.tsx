import React, { JSXElementConstructor, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  delay?: number;                // ms
  transitionDuration?: number;   // ms
  wrapperTag?: JSXElementConstructor<any> | string;
  childTag?: JSXElementConstructor<any> | string;
  className?: string;
  childClassName?: string;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const transitionDuration = (props.transitionDuration ?? 400) / 1000; // → sec
  const delay = (props.delay ?? 50) / 1000; // → sec
  const WrapperTag = props.wrapperTag ?? "div";
  const ChildTag = props.childTag ?? "div";

  // wrap the child tag with motion
  const MotionChild = motion(ChildTag as any);
  const Wrapper = WrapperTag as any;

  return (
    <Wrapper className={props.className}>
      {React.Children.map(props.children, (child, i) => (
        <MotionChild
          key={i}
          className={props.childClassName}
          initial={{ opacity: 0, y: 40 }} // start faded & below
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          viewport={{ once: false, amount: 0.3 }} 
          transition={{
            duration: transitionDuration,
            delay: i * delay,
            ease: "easeOut",
          }}
          onAnimationComplete={props.onComplete}
        >
          {child}
        </MotionChild>
      ))}
    </Wrapper>
  );
}
