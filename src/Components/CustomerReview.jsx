import React from 'react';
import Slider from 'react-slick';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ right: 0, zIndex: 1 }}
      onClick={onClick}
    >
      <div style={{ fontSize: '30px', color: 'black' }}>►</div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ left: 0, zIndex: 1 }}
      onClick={onClick}
    >
      <div style={{ fontSize: '30px', color: 'black' }}>◄</div>
    </div>
  );
};

const CustomerReview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-8 py-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">CUSTOMER REVIEWS</h1>
        <div className="mt-2 text-black flex justify-center gap-1">
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </div>
      </div>
      <Slider {...settings}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="px-2">
            <Card sx={{ maxWidth: 300, margin: 'auto' }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://ambraee.com/cdn/shop/files/Project_20241229_0007_cd79685f-1a21-4b9f-a7cb-f82a712a026c.jpg?v=1740202687&width=1800"
                title="Customer"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Customer {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample review content from a satisfied customer.
                </Typography>
                <div className="flex gap-1 mt-2">
                  <StarBorderIcon fontSize="small" />
                  <StarBorderIcon fontSize="small" />
                  <StarBorderIcon fontSize="small" />
                  <StarBorderIcon fontSize="small" />
                  <StarBorderIcon fontSize="small" />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReview;
