
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'
import clsx from 'clsx'
import React from 'react'

export interface FluffyGridProps {
  title?: string
  className?: string
  customId?: string
  children: React.ReactNode
  sx?: any
  content: any[]
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  spacing?: number
  layout?: string
  marginBottom?: boolean
  marginTop?: boolean
}

const GridContainer = styled(Grid2)(({ theme }) => ({
  maxWidth: '100%',
}))

const FluffyGrid: React.FC<FluffyGridProps> = ({
  title,
  className,
  children,
  customId,
  sx,
  content,
  align,
  justify,
  direction,
  spacing,
  layout,
  marginBottom,
  marginTop,
}) => {
  const gridClasses = clsx(className)

  const contentGrid = (
    <GridContainer
      id={customId}
      container
      direction={direction}
      spacing={spacing}
      justifyContent={justify}
      alignItems={align}
      className={gridClasses}
      sx={sx}
    >
      {content.map((item, index) => {
        if (!item) {
          return null
        }
        const { _key, type, textAlignment, className, ...componentProps } = item
        return (
        <>
					{title && <Typography variant='h2'></Typography>}
          <Grid2
            className="fluffy-grid__grid-item"
            textAlign={textAlignment}
            key={`${index}_${_key}`}
            sx={{marginTop: `${marginTop || 0}`, marginBottom: `${marginBottom || 0}`}}
          >
            {children}
          </Grid2>
        </>
        )
      })}
    </GridContainer>
  )

  return (
    <Container maxWidth="xl" className="fluffy-grid-wrapper">
      {contentGrid}
    </Container>
  )
}

export default FluffyGrid
