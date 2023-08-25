import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/Theme";
export default function Buttons({url}) {
  const { theme } = useTheme();
  return (
    <div className="buttons">
      <Link to={url}>
        <motion.button
          className={theme === "dark" ? "btn_one" : "btn_lOne"}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          Demo
        </motion.button>
      </Link>

      <Link to={url}>
        <motion.button
          className={theme === "dark" ? "btn_two" : "btn_lTwo"}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          Repo
        </motion.button>
      </Link>
    </div>
  );
}
