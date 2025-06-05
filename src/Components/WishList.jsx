import React from 'react';
import { useWishlist } from './MyContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close'; 
import Navbar from './Navbar'; 

const WishList = () => {
  const { wishlistItems, toggleWishlistItem} = useWishlist(); 
  const navigate = useNavigate();

  return (
    <div className="bg-[#ebe3d8] min-h-screen w-full">
      <Navbar />
        <h1 className="text-xl font-bold text-center w-full">WISHLIST</h1>
       <div  onClick={() => navigate('/')} className='flex cursor-pointer w-10'>
         <KeyboardBackspaceIcon
          fontSize="medium"
          sx={{ cursor: 'pointer' }} 
        />
        <h5 className='cursor-pointer'>Home</h5>
        </div>

      <div className="flex flex-wrap justify-center gap-6 p-4 ">
        {wishlistItems.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          wishlistItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                maxWidth: 280,
                boxShadow: 3,
                position: 'relative', 
              }}
            >
              <IconButton
                onClick={() => toggleWishlistItem(item)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.6)',
                  },
                }}
              >
                <CloseIcon sx={{ color: 'white' }} />
              </IconButton>

              <CardMedia
                component="img"
                image={item.imgsrc}
                alt={item.description}
                loading="lazy"
              />
              <div className="p-2 text-center">
                <p className="font-[600]">{item.description}</p>
                <h3>{item.price}</h3>
                <Link to={`/product/${item.id}`}>
                  <button className="bg-black w-full h-[40px] text-white transition-transform duration-100 hover:scale-105"
                  >
                    QUICK VIEW
                  </button>
                </Link>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
