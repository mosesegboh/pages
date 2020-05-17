import React, { Component } from 'react';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar'
import {Jumbotron} from './components/Jumbotron'
import Application from './Application';
import UserProvider from './providers/UserProvider';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
        <UserProvider>
          <Application />
        </UserProvider>
         
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
