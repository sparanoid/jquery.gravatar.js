# jquery.gravatar.js

## Usage

Without options:

```javascript
$('body').append($.gravatar('zachleatherman@gmail.com'));
```

With options:

```javascript
$('body').append($.gravatar('t@sparanoid.com', {secure: false, rating: 'pg'}));
```

More complex example:

```javascript
$(".user-gravatar").each(function() {
  var gravatar = $(this).find(".user-gravatar-inner");
  gravatar.empty().append($.gravatar(gravatar.data("gravatar-src"), {rating: "pg"}))
});
````

## Options

- size: size of the gravatar
- rating: rating of the gravatar g (default), pg, r, x
- image: default image url
- secure: serve https gravatar

See the source code comments for more details

## License

Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
