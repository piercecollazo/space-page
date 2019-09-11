import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Head from './components/Head'
import Main from './components/Main'


class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Nav />
        <Head />
        <Main />
      </div>
    )
  }
}

export default App;
