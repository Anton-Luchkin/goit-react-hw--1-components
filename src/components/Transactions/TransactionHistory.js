import React from 'react';
import PropTypes from 'prop-types';

import Transaction from './Transaction';

import s from './TransactionHistory.module.css';


const TransactionHistory = ({ transactions }) => (
   <table className={s.transactionHistory}>
      <thead>
         <tr className={s.header}>
            <th className={s.header_title}>Type</th>
            <th className={s.header_title}>Amount </th>
            <th className={s.header_title}>Currency</th>
         </tr>
      </thead>

      <tbody>
         {transactions.map(({ id, ...prop }) => (
            <Transaction key={id} {...prop} />
         ))}
      </tbody>
   </table>
);

TransactionHistory.propTypes = {
   transactions: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
      }),
   ),
};

export default TransactionHistory;
