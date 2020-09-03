import React from 'react';

import PropTypes from 'prop-types';

import s from './Statistical.module.css';

function getRandomColor() {
   let r = function () {
      return Math.floor(Math.random() * 256);
   };
   return `rgb(${r()},${r()},${r()})`;
}

const Statistics = ({ title, statisticalItems }) => {
   const isShowTitle = title;
   return (
      <section className={s.statistics}>
         {isShowTitle && <h2 className={s.title} >{title}</h2>}
         <ul className={s.statList}>
            {statisticalItems.map(({ id, label, percentage }) => {
               return (
                  <li key={id} className={s.item} style={{ backgroundColor: getRandomColor() }}>
                     <span className={s.label}>{label}</span>
                     <span className={s.percentage}>{percentage}%</span>
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