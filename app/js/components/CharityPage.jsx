import React from 'react';

import Feed from './Feed.jsx';
import Navbar from './Navbar.jsx';
import Stats from './Stats.jsx';
import CharityProfile from './CharityProfile.jsx';
import SuggestCharity from './SuggestCharity.jsx';

export default class CharityPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = parseInt(this.props.match.params.id);
    this.state = {
        loggedIn: true,
        userId:0
    };
    this.checkLogin();
  }

  checkLogin() {
      $.post('/loggedIn', "", function(data, status) {
          if (status === 'success' && data.isAuth === "authorized") {
              this.setState({loggedIn: true,userId:data.userId});
              console.log('logged in, user id is'+data.userId);
          }
          else {
              this.setState({loggedIn: false});
              console.log('not logged in');
          }
      }.bind(this));
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div id="main">
          <div className="row">
            <div className="container">
              <CharityProfile id={this.id} user={this.state.userId}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-push-6 col-sm-offset-1">
              <Stats/>
              <SuggestCharity id={this.id} user={this.state.userId}/>
            </div>
            <div className="col-sm-6 col-sm-pull-4">
              <Feed/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
