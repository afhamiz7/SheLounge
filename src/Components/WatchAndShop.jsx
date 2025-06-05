import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';  
import { useNavigate } from 'react-router-dom';

const videoData = [
  {
    id: '48',
    url: "https://cdn.shopify.com/videos/c/o/v/571735409c3645348bafdbb2351ebe66.mp4#t=0.1",
    title: "Vibrant Orange Anarkali Suit Set",
    price: "₹2,499",
  },
  {
    id: '16',
    url: "https://cdn.shopify.com/videos/c/o/v/53c9ec34d56c4415813390edf8f7ff35.mp4#t=0.1",
    title: "Black Aquarelle Floral Suit Set",
    price: "$59.99",
  },
  {
    id: '15',
    url: "https://cdn.shopify.com/videos/c/o/v/718d40cd771842068570bc1dca9ce855.mp4#t=0.1",
    title: "Green Aari Work Suit Set",
    price: "$120.00",
  },
  {
    id: '8',
    url: "https://cdn.shopify.com/videos/c/o/v/103683ccd3ed465984176a40a01073b4.mp4#t=0.1",
    title: "Urban White Cotton Kurta Set",
    price: "$75.50",
  },
  {
    id: '15',
    url: "https://cdn.shopify.com/videos/c/o/v/fdc147ae4f0d4a2cb0efaad700436a15.mp4#t=0.1",
    title: "Peach Embroidered Suit Set",
    price: "$99.00",
  },
  {
    id: '44',
    url: "https://cdn.shopify.com/videos/c/o/v/6a05604dd99d40c587ac50f360f44cd7.mp4",
    title: "Lilac Gota Kalidaar Lehenga Set",
    price: "$45.99",
  },
];

const WatchAndShop = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="carousel-container" style={{ padding: '1.5rem', maxWidth: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {videoData.map((video) => (
          <div key={video.id} style={{ padding: '0 0.5rem' }}>
            <div className="video-card">
              <video
                src={video.url}
                autoPlay
                muted
                loop
                playsInline
                className="video-element"
              />
              <div className="overlay">
                <h3 className="title">{video.title}</h3>
                <p className="price">{video.price}</p>
                <button className="shop-button" onClick={() => handleQuickView(video.id)}>
                  Quick View
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WatchAndShop;
