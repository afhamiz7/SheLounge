import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImgData from './data2';

export default function ActionAreaCard() {
  // Keep track of which items are favorited
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        padding: '0 20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
      }}
    >
      {ImgData.map((items, index) => (
        <Card
          key={index}
          sx={{
            width: '100%',
            maxWidth: 280,
            overflow: 'hidden',
            boxShadow: 3,
            position: 'relative',
            '&:hover .hoverContent': {
              opacity: 1,
            },
            '&:hover img': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={items.imgsrc}
              alt="new arrivals"
              sx={{
                transition: 'transform 0.3s ease',
              }}
            />
          </CardActionArea>

          {/* Heart Icon Toggle */}
          <IconButton
            onClick={() => toggleFavorite(index)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(241, 218, 218, 0.75)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,1)',
              },
              zIndex: 15,
            }}
          >
            {favorites[index] ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon color="error" />
            )}
          </IconButton>

          {/* Hover Button */}
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
              zIndex: 10,
            }}
          >
            <Button
              sx={{
                width: '250px',
                color: 'white',
                background: 'black',
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  );
}
