import React from 'react';
import styles from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr className={styles.row}>
    <td className={styles.row_item}>{type}</td>
    <td className={styles.row_item}>{amount}</td>
    <td className={styles.row_item}>{currency}</td>
  </tr>
);

export default Transaction;
