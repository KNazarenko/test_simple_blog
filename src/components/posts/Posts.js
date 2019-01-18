import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from './../../actions/actions';
import Post from './Post';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const items = this.props.posts;

    return (
      <React.Fragment>
        <div className="row justify-content-between">
          {items.map(item => (
            <Post key={item.id} item={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
