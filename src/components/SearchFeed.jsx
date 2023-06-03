import React, { useEffect, useState } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const SearchFeed = () => {
    const {searchTerm} = useParams()
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const url = `search?q=${searchTerm}&part=snippet`
        fetchFromAPI(url).then(res => setVideos(res.items))
    },[])

  return (
    <Stack>
      <Box p={2}>
              <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
                  Search Result for : {searchTerm}
                  <span style={{color: '#F31503'}}> Search Term</span>
              </Typography>
              <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default SearchFeed
