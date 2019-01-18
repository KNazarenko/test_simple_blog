import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { id, time, author, title, body } = this.props.item;
    let date = new Date(time);
    let dateToRender = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return (
      <Link
        to={`/post/${id}`}
        className="card col-md-5 hover"
        style={{
          marginTop: '2rem',
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem'
          }}
        >
          <p className="card-text text-uppercase">{author}</p>
          <div>{dateToRender}</div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </Link>
    );
  }
}

export default Post;
