import React from 'react';
import Friend from './Friend/Friend';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
   return (
      <ul className={styles.friendList}>
         {friends.map(({ avatar, name, isOnline, id }) => {
            return (
               <li key={id} className={styles.item}>
                  <Friend
                     avatar={avatar}
                     name={name}
                     isOnline={isOnline}
                  />
               </li >
            )
         })}
      </ul>
   )
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired
      }),
   ).isRequired
}

export default FriendList;