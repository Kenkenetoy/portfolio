/* eslint-disable prettier/prettier */
import { ParallaxText } from "./ParallaxText";

export const ParallaxContainer: React.FC = () => {
  return (
    <section className="py-10 bg-gray-900">
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll Velocity</ParallaxText>
    </section>
  );
};
