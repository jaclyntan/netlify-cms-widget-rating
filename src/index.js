import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.RatingControl = Control
  window.RatingPreview = Preview
}

export { Control as RatingControl, Preview as RatingPreview }
