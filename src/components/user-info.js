import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userInfo }) => (
  <div className="user-info">
    <img src={userInfo.avatar} alt={userInfo.login} />
    <h1>
      <a href={`https://github.com/${userInfo.login}`}>{userInfo.name}</a>
    </h1>

    <ul className="repos-info">
      <li>Repositorios: {userInfo.repos}</li>
      <li>Seguidores: {userInfo.followers}</li>
      <li>Seguindo: {userInfo.following}</li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default UserInfo;
