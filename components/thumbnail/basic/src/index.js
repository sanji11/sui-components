import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'

class ThumbnailBasic extends Component {
  static BASE_CLASS = 'sui-ThumbnailBasic'
  static IMAGE_CLASS = 'sui-ThumbnailBasic-image'
  static CAPTION_CLASS = 'sui-ThumbnailBasic-caption'
  static CAPTION_TEXT_CLASS = 'sui-ThumbnailBasic-caption-text'

  render () {
    const {captionText} = this.props
    return (
      <figure className={ThumbnailBasic.BASE_CLASS}>
        <ImagePlaceholder
          image={this.props.image}
          placeholder={this.props.placeholder}
          fallbackImage={this.props.fallbackImage}
        />
        {
          captionText &&
            <figcaption className={ThumbnailBasic.CAPTION_CLASS}>
              <div className={ThumbnailBasic.CAPTION_TEXT_CLASS}>
                {captionText}
              </div>
            </figcaption>
        }
      </figure>
    )
  }
}

ThumbnailBasic.displayName = 'ThumbnailBasic'

ThumbnailBasic.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  captionText: PropTypes.string,
  placeholder: PropTypes.node,
  fallbackImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
}

export default ThumbnailBasic
