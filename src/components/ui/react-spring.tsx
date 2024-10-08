import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { animated } from "react-spring";

export default function HomePage() {
    // Create a spring animation
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            transform: 'translateY(0px)',
            transition: { duration: 0.5 }
        });
    }, [controls]);

    return (
      <div className="container">
        {/* Apply the animation to the animated.div */}
        <animated.div initial={{ opacity: 0, transform: 'translateY(-20px)' }} animate={controls}>
          <h1>Hello, Next.js with React Spring!</h1>
        </animated.div>
      </div>
    );
  }