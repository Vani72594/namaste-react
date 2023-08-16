import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
  }
  render() {
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;

    return (
      <div className="usercard container">
        <h2>Users</h2>

        <hr />
        <img src={avatar_url} alt="User Avtar" className="userAvtar" />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: 🆔{twitter_username}</h4>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;
