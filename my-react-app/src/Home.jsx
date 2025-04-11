import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home-container">
      <motion.h1
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 4, y: 0 }}
        transition={{ duration: 1 }}
      >
        King's Pizza Shop
      </motion.h1>

      <motion.img
        id="homeimg"
        src="images/pizzas n salad.jpg"
        alt="pic of pizzas and a salad"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />    

      <br/><br/>

      <motion.button
        className="start-order-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => window.location.href = "/menu"}
      >
        Start Your Order
      </motion.button>
    </div>
  );
}

export default Home;
