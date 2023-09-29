import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchScroller } from "../../store/Slices/ScrollerSlice";

const Scroller = () => {
  const scroller = useSelector((state) => state.Scroller);

  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!scroller.data) {
      dispatch(fetchScroller());
    }
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % scroller.data.data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [scroller.data]);

  if (scroller.isLoading) {
    return <p>Loading...</p>;
  }

  if (scroller.isError) {
    return <p>Error occurred while fetching bytes.</p>;
  }

  if (scroller.data && scroller.data.data && scroller.data.data.length > 0) {
    console.log("Image Data:", scroller.data.data); // Log the image data
    const imageData = scroller.data.data;
    // console.log("data from scroller", imageData[1].image);

    // const images = imageData.image;

    for (var i = 0; i < imageData.length; i++) {
      images.push(imageData[i].image);
    }
    // console.log("images5", images.length);
    return (
      <div>
        {/* <h1>Image Slider Example</h1> */}
        <ImageSlider images={images} />
      </div>
    );
  }
  return null;
};

export default Scroller;
