import React from "react";
import Masonry from "react-masonry-css";
import Pin from "./Pin";

const MasonryLayout = ({ pins }) => {
  const breakPointObj = {
    default: 7,
    3000: 6,
    2000: 5,
    1200: 4,
    1000: 2,
    500: 1,
  };

  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={breakPointObj}
      >
        {pins?.map((pin) => (
          <Pin pin={pin} key={pin._id} className="w-max" />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
