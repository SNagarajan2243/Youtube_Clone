import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed,Navbar,SearchFeed,ChannelDetail,VideoDetail } from './components'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/', element: <Feed />
    },
    {
      path: '/video/:id', element: <VideoDetail />
    },
    {
      path: '/channel/:id', element: <ChannelDetail />
    },
    {
      path: '/search/:searchTerm', element: <SearchFeed />
    },
  ])

  return (
    <React.Fragment>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <RouterProvider router={router} />
      </Box>
    </React.Fragment>
  )
}

export default App
