import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/post/${id}`);
        const data = await response.json();
        const galleryImages = data.images.map((image) => image.path);
        const postData = {
          title: data.title,
          text: data.text,
          images: galleryImages,
        };

        setPost(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPost();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <div className="custom-font ">
      {!post ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-blue option-title">{post.title}</div>
          <div>{post.text}</div>
          <div style={{ width: "1000px", margin: "0 auto" }}>
            <Slider {...settings}>
              {post.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
