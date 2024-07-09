import { motion } from "framer-motion";

export function FloatingDiv({ children,delay }) {
    return (
      <motion.div
        animate={["initial"]}
        whileHover={["grow"]}
        variants={{
          grow: {
            scale: 1.1
          },
          rotate: {
            rotate: [null, -100, 10, 0],
            transition: {
              duration: 10
            }
          },
          initial: {
            y: [-20, 20],
            rotate: [null, 0, 0, 0],
            transition: {
              delay: 0.5,
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        }}
      >
        {children}
    </motion.div>
    );
  }