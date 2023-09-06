import React from 'react'
import { Box, Typography } from '@mui/material'

export interface FluffyCardProps {
  classname?: string;
  customId?: string;
  // image?: {
  //   alt: string;
  //   src: string;
  // }
  children?: React.ReactNode;
  text: string;
  title: string;
}

//change image as children with React.ReactNode
const FluffyCard: React.FC<any> = (props) => {
  const { className, customId, image, children, text, title } = props
  return (
    <Box id={customId ?? ''} className={className ?? ''} >
      {/* {image?.src && 
        <img alt={image?.alt || ''} src={`${image.src || ''}`}/>
      } */}
      {children}
      <Typography>{title}</Typography>
      <Typography>{text}</Typography>
    </Box>
  )
}

export default FluffyCard
