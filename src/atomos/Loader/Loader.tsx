import React from 'react'


import LoopIcon from '@mui/icons-material/Loop';


export const Loader = (props: any) => {
  return (
    <div>
      <LoopIcon className = "App-logo" sx={{ fontSize: props.font ? props.font : '10' }}
      />
    </div>
  )
}
