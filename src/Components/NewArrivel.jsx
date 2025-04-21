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
import ImgData from './data';

export default function ActionAreaCard() {
  const [likedItems, setLikedItems] = useState(Array(ImgData.length).fill(false));

  const toggleLike = (index) => {
    setLikedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
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
      {ImgData.map((item, index) => (
        <Card
          key={item.id || index}
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
              image={item.imgsrc}
              alt={item.alt || 'new arrival'}
              loading="lazy"
              sx={{
                transition: 'transform 0.3s ease',
              }}
            />
          </CardActionArea>

          {/* Heart Icon Toggle */}
          <IconButton
            onClick={() => toggleLike(index)}
            aria-label={likedItems[index] ? 'Unlike' : 'Like'}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: likedItems[index]
                ? 'rgba(255, 0, 0, 0.2)'
                : 'rgba(247, 223, 223, 0.75)',
              '&:hover': {
                backgroundColor: likedItems[index]
                  ? 'rgba(255, 0, 0, 0.4)'
                  : 'rgba(255,255,255,1)',
              },
              zIndex: 15,
              transition: 'background-color 0.3s ease',
            }}
          >
            {likedItems[index] ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon color="error" />
            )}
          </IconButton>

          {/* Hover Button Overlay */}
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
