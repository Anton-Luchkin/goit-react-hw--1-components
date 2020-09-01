import React from 'react';
import PropTypes from 'prop-types';

import styles from './Friend.module.css';

import defaultImg from '../../../defaultImg.png';


const Friend = ({ avatar, name, isOnline }) => {
   return (
      <>
         <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</span>
         <img className={styles.avatar} src={avatar} alt={name} width="48" />
         <p className={styles.name} >{name}</p>
      </>
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

