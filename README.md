# netlify-cms-widget-rating

[Check out a demo!](https://netlify-cms-widget-rating.netlify.app)

Add a rating widget to Netlify CMS.

Uses a range slider with 0.5 step value between 0-10.

## How to use

Add to your Netlify CMS configuration:
```js
// Using global window object
CMS.registerWidget('rating', ratingControl, ratingPreview)

// Using npm module import
import CMS from 'netlify-cms';
CMS.registerWidget('rating', ratingControl, ratingPreview)
```

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: rating }
```


## Commands

Develop:

```shell
npm start
```

Build:
```shell
npm run build
```

### Rebuilding

If you are rebuilding this package for production you'll need to make sure you update the Control and Preview names before running `npm run build`. eg.
  ```js
  if (typeof window !== 'undefined') {
  window.RatingControl = Control
  window.RatingPreview = Preview
  }

  export { Control as RatingControl, Preview as RatingPreview }
  ```