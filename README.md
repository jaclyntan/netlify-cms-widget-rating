# netlify-cms-widget-rating

[Check out a demo!](https://replace-with-widget-name.netlify.com/demo)

Add a rating widget to Netlify CMS.

Uses a range slider with 0.5 step value between 0-10.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-rating
```

```js
import rating from 'netlify-cms-widget-rating'

CMS.registerWidget('rating', ratingControl, ratingPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-rating@^1.0.0"></script>

<script>
  CMS.registerWidget('rating', ratingControl, ratingPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: rating }
```

## Configuration

Explain any custom configuration steps here, or omit the section if there are none.

## Support

For help with this widget, open an [issue](https://github.com/<user>/<repo>) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
