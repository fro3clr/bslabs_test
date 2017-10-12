import React from "react";

class CommentForm extends React.Component {
  processComment = (post, addComment) => event => {
    event.preventDefault();

    addComment(post.id, {
      commentName: this.refs.name.value,
      commentBody: this.refs.desc.value
    });

    this.refs.name.value = this.refs.desc.value = "";
  };
  render() {
    const { post, addComment } = this.props;
    return (
      <form
        className="post-edit"
        ref="commentForm"
        onSubmit={this.processComment(post, addComment)}
      >
        <input type="text" ref="name" placeholder="Your Name" required />
        <textarea ref="desc" placeholder="Add your comment here" required />
        <button
          id="submit"
          type="submit"
          className="waves-effect waves-light btn green"
        >
          Add Comment
        </button>
      </form>
    );
  }
}

export default CommentForm;
