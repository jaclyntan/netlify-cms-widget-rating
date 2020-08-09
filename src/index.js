import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.NetlifyCmsWidgetRating = { control: Control, preview: Preview };
}

export { Control, Preview }
