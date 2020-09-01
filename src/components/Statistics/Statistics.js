import React from 'react';
import styles from './Statistical.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
   let r = function () {
      return Math.floor(Math.random() * 256);
   };
   return `rgb(${r()},${r()},${r()})`;
}


const Statistics = ({ title, statisticalItems }) => {

   return (
      <section className={styles.statistics}>
         {title && <h2 className={styles.title} >{title}</h2>}
         <ul className={styles.statList}>
            {statisticalItems.map(({ id, label, percentage }) => {
               return (
                  <li key={id} className={styles.item} style={{ backgroundColor: getRandomColor() }}>
                     <span className={styles.label}>{label}</span>
                     <span className={styles.percentage}>{percentage}%</span>
                  </li>
               )
            })}
         </ul>
      </section >
   )
}

Statistics.propTypes = {
   title: PropTypes.string,
   statisticalItems: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired
      })
   ).isRequired
}

export default Statistics;