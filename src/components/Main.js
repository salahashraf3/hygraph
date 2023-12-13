
import React from "react";
import style from "@/components/Main.module.css";

const Main = ({ blogposts }) => {
  return (
    <div className={style.blog_container}>
      <h1>Latest Blog Posts</h1>
      <div className={style.blog_list}>
        {blogposts?.map((post) => (
          <div key={post.id} className={style.blog_post}>
            <img
              src={post.postImage.url}
              alt={post.title}
              className={style.post_image}
            />
            <div className={style.post_content}>
              <h2>{post.title}</h2>
              <p className={style.post_date}>
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className={style.post_description}>{post.description}</p>
              <p className={style.post_author}>Author: {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
