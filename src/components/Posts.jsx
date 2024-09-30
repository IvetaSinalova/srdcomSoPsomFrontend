import React, { useEffect, useState } from "react";
import TitleImage from "./TitleImage";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts-all/2");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the function
    fetchPosts();
  }, []);
  return (
    <div>
      {!posts ? (
        <Loading />
      ) : (
        <div>
          <TitleImage imageName="titulka.jpg" text="ČLÁNKY" />
          <div className="flex flex-wrap gap-4 pt-4 custom-font justify-center items-center">
            {posts?.length > 0 &&
              posts.map((post) => (
                <Link
                  to={`/post/${post.id}`}
                  className="flex flex-col justify-center items-center cursor-pointer"
                  key={post.id}
                >
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="text-center text-blue">{post.title}</div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
