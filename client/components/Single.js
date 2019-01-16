import React, { Component } from 'react';
import Photo from './Photo';

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    function matchPostWithPostId(post) {
      return post.code === postId;
    }
    const index = this.props.posts.findIndex(matchPostWithPostId);
    const post = this.props.posts[index];
    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
      </div>
    );
  }
}

export default Single;
