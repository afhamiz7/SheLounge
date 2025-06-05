import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardActionArea,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImgData from './data';
import { useWishlist } from './MyContext';
import { useMediaQuery, useTheme } from '@mui/material';

const ShopByCollection = () => {
  const remainingItems = ImgData.slice(8);
  const { wishlistItems, toggleWishlistItem } = useWishlist();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check for mobile view

  // State to manage visible cards
  const [visibleCards, setVisibleCards] = useState(isMobile ? 3 : remainingItems.length);

  const isItemLiked = (itemId) =>
    wishlistItems.some((i) => i.id === itemId);

  const toggleWishlistAndNavigate = (item) => {
    toggleWishlistItem(item);
  };

  const handleShowMore = () => {
    setVisibleCards(remainingItems.length); 
  };
  const handleViewMore =()=>{
    navigate('/Allproduct',{state:{category:'party-wears'}})
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          padding: '0 20px',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        {/* Loop through items and show only the visible ones */}
        {remainingItems.slice(0,8, visibleCards).map((item) => (
          <Card
            key={item.id}
            sx={{
              width: '100%',
              maxWidth: 280,
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative',
              '&:hover .hoverContent': { opacity: 1 },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <CardActionArea onClick={() => navigate(`/product/${item.id}`)}>
              <CardMedia
                component="img"
                image={item.imgsrc}
                alt={item.name}
                loading="lazy"
                sx={{ transition: 'transform 0.3s ease' }}
              />
            </CardActionArea>

            <IconButton
              onClick={() => toggleWishlistAndNavigate(item)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: isItemLiked(item.id)
                  ? 'rgba(255, 0, 0, 0.2)'
                  : 'rgba(247, 223, 223, 0.75)',
                '&:hover': {
                  backgroundColor: isItemLiked(item.id)
                    ? 'rgba(255, 0, 0, 0.4)'
                    : 'rgba(255,255,255,1)',
                },
              }}
            >
              {isItemLiked(item.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="error" />
              )}
            </IconButton>

            <Box
              className="hoverContent"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ width: '250px', color: 'white', background: 'black' }}
                >
                  QUICK VIEW
                </Button>
              </Link>
            </Box>
          </Card>
        ))}
      </div>

      {/* Show More Button (Mobile Only) */}
      {isMobile && visibleCards < remainingItems.length && (
        <div className="flex justify-center mt-[30px]">
          <button
            onClick={handleShowMore}
            className="bg-black text-white w-[150px] h-[40px]"
          >
            SHOW MORE
          </button>
        </div>
      )}

      {!isMobile && (
        <div className="flex justify-center mt-[30px]">
          <button
            onClick={handleViewMore}
            className="bg-black text-white w-[150px] h-[40px]"
          >
            VIEW MORE
          </button>
        </div>
      )}
    </>
  );
};

export default ShopByCollection;
