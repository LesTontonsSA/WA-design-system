import React from 'react'
import { ArrowRight } from '@mui/icons-material'
import { Button, Link, Typography } from '@mui/material'
import { ResponsiveBanner } from '../styles/style'
import clsx from 'clsx'

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  className?: string;
}

interface BannerProps {
  bannerTitle: string
  backgroundImage?: any
  className?: string
  layout?: 'simple' | 'detailed' | 'navigation'
  link?: {
    text: string
    url: string
  }
  logo?: any
  subtitle?: string
  text?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, width, className }) => {
  return <img src={src} alt={alt} width={width} className={className} />;
};

const GdprBanner: React.FC<BannerProps> = (props) => {
  const { bannerTitle, backgroundImage, className, layout, link, logo, text } = props
  const isAdvanced = layout === 'detailed'
  const isSimple = layout === 'simple'
  const isNavigation = layout === 'navigation'
  const showTitle = isSimple || isAdvanced

  const bannerContent = (
    <div className="banner-container">
      <div className="banner-container__detail">
        {showTitle && (
          <div className="banner-container__title">
            <Typography variant="h1">{bannerTitle}</Typography>
          </div>
        )}
        {logo && (
          <div className="banner-container__logo">
            <Image src={logo.url} alt={logo.alt || 'no_logo'} />
          </div>
        )}
        {text && (
          <div className="banner-container__text">
            <p>{text}</p>
          </div>
        )}

        {link && (
          <Button href={link.url} variant="contained" className="banner-container__text">
            {link.text}
          </Button>
        )}
      </div>
      {isNavigation && link && (
        <div className="banner-container__actions">
          <div className="action-background"></div>
          <Button className="action-button">
            <span className="action-text">{link.text}&nbsp;</span>
            <ArrowRight />
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <ResponsiveBanner layout={layout ?? 'simple'} className={clsx(className)}>
      {backgroundImage && (
        <Image 
          src={backgroundImage.url}
          alt={backgroundImage.alt || 'no_alt'}
        />
      )}
      {isNavigation && (
        <Link href={link?.url} className="content-wrapper">
          {bannerContent}
        </Link>
      )}
      {!isNavigation && <div className="content-wrapper">{bannerContent}</div>}
    </ResponsiveBanner>
  )
}

export default GdprBanner;
