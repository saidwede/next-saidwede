"use client"
// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { ReactElement, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Banner from "../components/banner";
import Experiences from "../components/experiences";
import Contacts from "../components/contacts";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ content }: { content: ReactElement }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        {content}
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Section content={<Banner />} />
      <Section content={<Experiences />} />
      <Section content={<Contacts />} />
    </>
  );
}
