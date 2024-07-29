import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: { top: ["100%", "0%"] },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs.
    Each div will have the same animation defined by the stairAnimation object. The delay for each div is calculated dynamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step. */}
      {[...Array.of(6)].map((_, index) => {
        return <motion.div key={index} />;
      })}
    </>
  );
}

export default Stairs;
