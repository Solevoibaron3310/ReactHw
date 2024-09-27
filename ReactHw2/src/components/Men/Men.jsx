

import React from "react";
import PropTypes from "prop-types";
import styles from "./Men.module.scss";
import MenCards from "./MenCards/MenCards";

const Men = ({ label }) => {
  return (
    <div className={styles.Men}>
      <span className={styles.label}>{label}</span>
      <MenCards />
    </div>
  );
};

Men.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Men;
