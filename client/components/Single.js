import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    function matchPostWithPostId(post) {
      return post.code === postId;
    }
    const index = this.props.posts.findIndex(matchPostWithPostId);
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;
