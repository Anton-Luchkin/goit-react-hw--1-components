import React from 'react';

import PropTypes from 'prop-types';

import s from './Friend.module.css';

import defaultImg from '../../../defaultImg.png';


const Friend = ({ avatar, name, isOnline }) => {
   const statusBgColor = isOnline ? 'green' : 'red'
   return (
      <li className={s.item}>
         <span className={s.status} style={{ backgroundColor: statusBgColor }}>{isOnline}</span>
         <img className={s.avatar} src={avatar} alt={name} width="48" />
         <p className={s.name} >{name}</p>
      </li >

   )
}

Friend.defaultProps = {
   avatar: defaultImg,
};

Friend.propTypes = {
   avatar: PropTypes.string,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired
}


export default Friend;

