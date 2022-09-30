import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <p className="d-flex justify-content-start text-secondary h6">
            <a href={post.url}>{post.id}</a>{" "}
          </p>
          <h4>{post.episode}</h4>
          <h5>{post.name}</h5>
          {post.air_date}
        </li>
      ))}
    </ul>
  );
};

export default Post;
