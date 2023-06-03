import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography,Box,Stack} from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { CheckCircle } from '@mui/icons-material'
const VideoDetail = () => {
  const {id} = useParams()
  const [VideoDetail,setVideoDetail] = useState(null)
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`videos?par=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items))
  },[id])
  if(!VideoDetail) return <Typography>Loading...</Typography>
  // const title = VideoDetail?.snippet.title
  // const channelId = VideoDetail?.snippet.channelId
  // const channelTitle = VideoDetail?.snippet.channelTitle
  // const viewCount = VideoDetail?.statistics.viewCount
  // const likeCount = VideoDetail?.statistics.likeCount
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}} = VideoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column',md: 'row'}}>
        <Box flex={1}>
            <Box sx={{width: '100%',position: 'sticky',top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
              <Typography color="#fff" variant="h5" sx={{fontWeight: "bold",mt: 2}}>{VideoDetail?.snippet.title}</Typography>
              <Stack direction="row" justifyContent = "space-between" sx={{color: '#fff'}} py={1} px={2} >
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm: 'subtitle1', md: 'h6'}} color="#fff">
                    {channelTitle} 
                    <CheckCircle sx={{fontSize: '12px',color: 'gray',ml: '5px'}} />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} views
                  </Typography>
                </Stack>
              </Stack>
            </Box>
        </Box>  
        <Box px={2} py={{md: 1,xs: 5}} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>  
    </Box>
  )
}

export default VideoDetail
