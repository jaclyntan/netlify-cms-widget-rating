# netlify-cms-widget-rating

[Check out a demo!](https://netlify-cms-widget-rating.netlify.app)

Add a rating widget to Netlify CMS.

Uses a range slider with 0.5 step value between 0-10.

## How to use

Add to your Netlify CMS configuration:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    <script src="https://unpkg.com/netlify-cms-widget-rating@0.0.1/dist/main.js"></script>
    <script>
        const ratingWidget = window.NetlifyCmsWidgetRating;
        CMS.registerWidget('rating', ratingWidget.control, ratingWidget.preview);
    </script>
  </body>
</html>
```

```yaml
    fields:
      - { name: Rating, label: Rate, widget: rating }
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
