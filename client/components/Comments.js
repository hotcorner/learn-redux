import React, { Component } from 'react';

class Comments extends Component {
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.deleteComment.bind(this, index)}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  deleteComment(index) {
    const { postId } = this.props.params;
    this.props.deleteComment(postId, index);
  }

  handleComment(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const { author, comment } = this.refs;
    this.props.addComment(postId, author, comment);
    e.target.reset();
  }
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleComment.bind(this)}
        >
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Your Comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
