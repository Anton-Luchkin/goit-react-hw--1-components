import React from 'react';
import PropTypes from 'prop-types';

import Friend from './Friend/Friend';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
   return (
      <ul className={s.friendList}>
         {friends.map(({ id, ...prop }) => {
            return (
               <Friend key={id} {...prop} />
            )
         })}
      </ul >
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