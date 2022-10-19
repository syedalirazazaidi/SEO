import React from "react";

const BlogPost = ({ allPosts }) => {
  for (var i = 0; i < allPosts.length; i++) {
    const author = allPosts.author;

    return <div style={{ backgroundColor: "green" }}>{author}</div>;
  }
};

export default BlogPost;
