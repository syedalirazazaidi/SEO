import React from "react";

const BlogPost = ({ allPosts }) => {
  for (var i = 0; i < 5; i++) {
    const author = allPosts.author;

    return <div style={{ backgroundColor: "green" }}>{author}</div>;
  }
};

export default BlogPost;
