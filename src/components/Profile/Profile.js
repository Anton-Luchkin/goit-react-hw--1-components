import React from 'react';
import PropTypes from 'prop-types';

import Stats from "./Stats/Stats";

import s from "./Profile.module.css";

import defaultImg from "../../defaultImg.png";

const Profile = ({ name, tag, location, avatar, stats }) => {
   return (
      <div className={s.profile}>
         <div className={s.description}>
            <img
               src={avatar}
               alt={name}
               className={s.avatar}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
         </div>
         <Stats {...stats} />
      </div>
   );
};

Profile.defaultProps = {
   avatar: defaultImg
};

Profile.propTypes = {
   name: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   avatar: PropTypes.string,
   stats: PropTypes.object.isRequired,
}

export default Profile;
