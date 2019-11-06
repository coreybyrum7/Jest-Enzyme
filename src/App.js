import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.scss';

import { fetchPosts } from './actions'

import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this); // passing method to component
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {

    const { posts } = this.props; // desctructure posts

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    }

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to load posts" />
          <SharedButton {...configButton} />
          { posts.length > 0 && 
            <div>
              { posts.map((post, index) => {
                  const { title, body } = post;
                  const configListItem = {
                    title,
                    desc: body
                  };
                  return (
                    <ListItem key={index} {...configListItem} />
                  )
              })}
            </div>
              }
        </section>
      </div>
    );
  }
}

// connect component to store
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);