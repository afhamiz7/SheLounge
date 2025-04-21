import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videoData = [
  "https://videomedia.vizupcommerce.com/ambreeonline.myshopify.com/generated_gif/snip-reel-ambreeonline.myshopify.com-DHYZnUHz-kt.mp4#t=0.1",
  "https://cdn.shopify.com/videos/c/o/v/571735409c3645348bafdbb2351ebe66.mp4#t=0.1",
  "https://cdn.shopify.com/videos/c/o/v/53c9ec34d56c4415813390edf8f7ff35.mp4#t=0.1",
  "https://cdn.shopify.com/videos/c/o/v/718d40cd771842068570bc1dca9ce855.mp4#t=0.1",
  "https://cdn.shopify.com/videos/c/o/v/103683ccd3ed465984176a40a01073b4.mp4#t=0.1",
];

const WatchAndShop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // 👈 Enable automatic sliding
    autoplaySpeed: 8000, // 👈 3 seconds per slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="py-6 px-4 sm:px-6 md:px-8 max-w-full overflow-hidden">
      <Slider {...settings}>
        {videoData.map((videoUrl, index) => (
          <div key={index} className="px-2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] sm:h-[250px] md:h-[350px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WatchAndShop;
