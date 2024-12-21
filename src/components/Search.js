import React, { useState } from 'react';
import { TextField, Slider, Box } from '@mui/material';
import axios from 'axios';
import { ImageResult } from './ImageResult';

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [amt, setAmt] = useState(15);
  const [api, setApi] = useState("https://pixabay.com/api/"); 
  const [img,setImg]=useState([]);
  function textchange(e){
    setSearchText(e.target.value);
    axios.get(`${api}?key=${process.env.REACT_APP_API_KEY}&q=${searchText}&image_type=photo&per_page=${amt}&safesearch=true`)
    .then(res=>setImg(res.data.hits))
    .catch(err=>{console.log(err)});
  }
  function valuechange(e){
    setAmt(e.target.value);
    axios.get(`${api}?key=${process.env.REACT_APP_API_KEY}&q=${searchText}&image_type=photo&per_page=${amt}&safesearch=true`)
    .then(res=>setImg(res.data.hits))
    .catch(err=>{console.log(err)});
  }
  console.log(img);
  return (
    <Box 
      sx={{
        display: "flex",
        alignItems: "center", 
        flexDirection: "column", 
        gap: "1rem", 
        marginTop: "rem", 
        height: "100vh" 
      }}
    >
      <TextField 
        id="search-input" 
        label="Search" 
        variant="standard" 
        sx={{ width: "30rem" }} 
        value={searchText} 
        onChange={textchange} 
      />
      Number of Images
      <Slider
        aria-label="Amount"
        value={amt}
        onChange={valuechange} 
        valueLabelDisplay="auto"
        step={5}
        marks
        min={5}
        max={20}
        sx={{ maxWidth: "20rem" }}
      />
      {img.length > 0 ? <ImageResult imgs={img} /> : null}
    </Box>
    

  );
};
