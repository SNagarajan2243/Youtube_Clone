import React, { useEffect, useState } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {

    const [selectedCategory,setSelectedCategory] = useState('New')
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '1f14b80557msh53754ea925c7496p1e9f6bjsn443eb8e3cf60',
        //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        //     }
        // };
        const url = `search?q=${selectedCategory}&part=snippet`
        // const fetchResult = async() => {
        //     const response = await fetch(url, options);
        //     const result = await response.json();
        //     setVideos(result.items)
        // } 
        // fetchResult();
        fetchFromAPI(url).then(res => setVideos(res.items))
    },[selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx: "column",md:"row"}}}>
        <Box sx={{height: {sx: 'auto', md: '92vh'},borderRight: '1px solid #3d3d3d',px:{sx:0,md:2}}}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className="copyright" variant="body2" sx={{mt:1.5, color: '#fff'}}>
                Copyright @ 2023 NA
            </Typography>
        </Box>
        <Box p={2} sx={{overfloxY: "auto", height: '90vh', flex:2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
                {selectedCategory}
                <span style={{color: '#F31503'}}> Videos</span>
            </Typography>
            <Videos style={{overfloxY: 'auto'}} videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed
