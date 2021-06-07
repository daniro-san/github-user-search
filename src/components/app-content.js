import React from "react";
import Repos from "./repos";
import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import PropTypes from "prop-types";

const AppContent = ({
  userInfo,
  repos,
  starred,
  isLoading,
  handleSearch,
  getRepos,
  getStarred,
}) => (
  <div className="app">
    <Search handleSearch={handleSearch} isDisabled={isLoading} />
    {isLoading && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (
      <Repos className="repos" title="Repositórios" repos={repos} />
    )}

    {!!starred.length && (
      <Repos className="starred" title="Favoritos" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default AppContent;
