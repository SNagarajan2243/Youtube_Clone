import React, { useEffect, useState } from 'react'
import {Box,Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const SearchFeed = () => {
    const {SearchTerm} = useParams()
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const url = `search?q=${SearchTerm}&part=snippet`
        fetchFromAPI(url).then(res => setVideos(res.items))
    },[])

  return (
    <Box p={2} sx={{overfloxY: "auto", height: '90vh', flex:2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
                Search Result for : 
                <span style={{color: '#F31503'}}> Search Term</span>
            </Typography>
            <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed
