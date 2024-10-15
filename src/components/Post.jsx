import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const sliderRef = useRef(null);

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
  }, [id]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Disable default arrows to add custom ones
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Track slide change
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="custom-font">
      {!post ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center text-center post-detail">
          <div className="text-blue option-title">{post.title}</div>
          <div>{post.text}</div>
          <div
            className="slider-container"
            style={{
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Slider ref={sliderRef} {...settings}>
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

            {/* Conditionally render left arrow if not on the first slide */}
            {currentSlide !== 0 && (
              <button
                onClick={goToPrevious}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  fontSize: "50px",
                }}
              >
                <img
                  src="/arrow_gallery.png"
                  alt="arrow-left"
                  className="gallery-arrow left"
                />
              </button>
            )}

            {/* Conditionally render right arrow if not on the last slide */}
            {currentSlide !== post.images.length - 1 && (
              <button
                onClick={goToNext}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  fontSize: "50px",
                }}
              >
                <img
                  src="/arrow_gallery.png"
                  alt="arrow-rigth"
                  className="gallery-arrow"
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
