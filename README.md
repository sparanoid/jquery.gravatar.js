# jquery.gravatar.js

## Usage

Without options:

```javascript
$(".gravatar").append($.gravatar("zachleatherman@gmail.com"));
```

With options:

```javascript
$(".gravatar").append($.gravatar("t@sparanoid.com", {secure: false, rating: "pg"}));
```

Initialize all `.gravatar` containers:

```javascript
$(".gravatar").each(function() {
  gravatar.append($.gravatar(gravatar.data("gravatar-src"), {rating: "pg"}));
});
```

Pass image size from data attributes:

```javascript
$(".gravatar").each(function() {
  var src = $(this).data("gravatar-src");
  var size = $(this).data("gravatar-size");
  if (!size) size = 60;
  $(this).append($.gravatar(src, {size: size, rating: "pg"}));
});
```

## Options

- size: size of the gravatar
- rating: rating of the gravatar g (default), pg, r, x
- image: default image url
- secure: serve https gravatar

See the source code comments for more details

## License

Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
