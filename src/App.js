import axios from "axios";
import React from "react";
import AppContent from "./components/app-content";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isLoading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getGitHubApiUrl(username, type) {
    const searchUser = username ? `/${username}` : "";
    const searchType = type ? `/${type}` : "";
    return `https://api.github.com/users${searchUser}${searchType}`;
  }

  handleSearch(e) {
    const value = e.target.value;

    if (e.key === "Enter") {
      this.setState({
        userInfo: null,
        repos: [],
        starred: [],
        isLoading: true,
      });

      axios
        .get(this.getGitHubApiUrl(value))
        .then((response) => {
          this.setState({
            userInfo: {
              name: response.data.name,
              login: response.data.login,
              avatar: response.data.avatar_url,
              repos: response.data.public_repos,
              followers: response.data.followers,
              following: response.data.following,
            },
            repos: [],
            starred: [],
          });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  getRepos(type) {
    return () => {
      if (!!this.state.userInfo) {
        axios
          .get(this.getGitHubApiUrl(this.state.userInfo.login, type))
          .then((response) => {
            this.setState({
              [type]: response.data.map((repo) => ({
                id: repo.id,
                name: repo.name,
                link: repo.html_url,
              })),
            });
          });
      }
    };
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;
