import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import LoadingBar from 'react-redux-loading-bar';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.loading
              ? null
              : (
                <div>
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/new" component={NewTweet}/>
                  <Route path="/tweet/:id" component={TweetPage}/>
                </div>
              )
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);