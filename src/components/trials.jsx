import { motion } from 'framer-motion';

const MultiAnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 7 }}
      className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <motion.img
        className="w-full h-48 object-cover"
        src="path-to-image.jpg"
        alt="Example"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="p-4">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Card Title
        </motion.h1>
        <motion.p
          className="mt-2 text-gray-600"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          This is an example of a card with multiple animations.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MultiAnimatedComponent;
