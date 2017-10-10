import React from "react";

const Post = ({ post }) =>
    <div className="row">
          <div className="col s12 m6 l3">
            {/*<h4 className="light">Small Card</h4>*/}
            <div className="card small">
              <div className="card-image">
                <img src={post.webformatURL} />
                <a href={post.pageURL} className="card-title" style={{color: '#adadad'}}>Source</a>
              </div>
              <div className="card-content">
                <p>{post.tags}</p>
              </div>
              <div className="card-action">
                <a href="#">Click here</a>
                <a href="#">Click here</a> 
                <br /><br />
                <a class="waves-effect waves-light btn red"><i class="material-icons left">grade</i>{post.likes}</a>
              </div>
            </div>
</div></div>;

export default Post;
