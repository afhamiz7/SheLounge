import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import ImgData from './data'; // Import ImgData from another file

export default function ActionAreaCard() {
  return (
    <div className="flex space-x-5 ml-[20px]">
      {ImgData.map((items, index) => (
        <Card
          key={index}
          className="parent" // Add a class for parent hover effect
          sx={{
            maxWidth: 350,
            position: 'relative', // Ensures the button is positioned inside the card
            overflow: 'hidden', // Prevent button from overflowing outside the card
            '&:hover': {
              boxShadow: 6, // Optional: Add shadow effect on hover
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={items.imgsrc}
              alt="new arrivals"
              sx={{
                height: 'auto',
                width: '100%',
                transition: 'transform 0.3s ease', // Optional: Zoom effect on hover
                '&:hover': {
                  transform: 'scale(1.05)', // Slight zoom effect on hover
                },
              }}
            />
          </CardActionArea>

          {/* Button at the bottom, initially hidden */}
          <div
            className="btn"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
              opacity: 0, // Initially hidden
              visibility: 'hidden', // Initially hidden
            }}
          >
            <Button variant="contained" sx={{ width: '100%' }}>
              Shop Now
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
