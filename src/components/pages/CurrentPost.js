import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, getComments } from './../../actions/actions';

class CurrentPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getComments();
  }

  render() {
    const {
      post: { id: currentId, time, author, title, body },
      comments
    } = this.props.posts;
    let date = new Date(time);
    let dateToRender = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return (
      <div>
        <h1 className="mt-5 text-center">{title}</h1>

        <div className="card col mt-5">
          <div className="card-body">
            <p className="card-text text-uppercase">{author}</p>
            <p>{dateToRender}</p>

            <div
              className="card-text"
              style={{
                fontSize: '1.3rem'
              }}
            >
              {body}
            </div>
            <div className="card-title  mt-5">Comments:</div>

            <div className="card-text">
              {comments.map(comment => {
                const { id, postId, body } = comment;
                if (postId === currentId) {
                  return (
                    <div className="mt-2" key={id}>
                      {body}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPost, getComments }
)(CurrentPost);
