import React from 'react';

import s from './TransactionHistory.module.css';

const Transaction = ({ type, amount, currency }) => (
   <tr className={s.row}>
      <td className={s.row_item}>{type}</td>
      <td className={s.row_item}>{amount}</td>
      <td className={s.row_item}>{currency}</td>
   </tr>
);

export default Transaction;
