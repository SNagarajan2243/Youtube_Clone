import React from 'react'
import {Stack,Box} from '@mui/material'
import { VideoCard,ChannelCard } from './'
const Videos = ({videos,direction,justifycontent}) => {
  if(!videos?.length) return "Loading..."
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent={justifycontent || "start"} gap={2} alignItems="start">
      {videos?.map((item,ind) => (
        <Box key={ind}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
