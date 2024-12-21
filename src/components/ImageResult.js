import React, { useState } from 'react';
import { Grid, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Zoom } from '@mui/material';

export const ImageResult = ({ imgs }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageClick = (imgUrl) => {
    setSelectedImg(imgUrl);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <>
      {imgs && imgs.length > 0 && (
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          {imgs.map((img, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <img
                src={img.largeImageURL}
                alt={`image-${index}`}
                style={{
                  width: '100%',
                  height: '300px', 
                  objectFit: 'cover', 
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(img.largeImageURL)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <Zoom in={open}>
            <img src={selectedImg} alt="Selected" style={{ width: '100%' }} />
          </Zoom>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleCloseDialog}>Close</IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
