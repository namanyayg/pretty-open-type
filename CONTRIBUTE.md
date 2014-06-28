# Contribute

Currently, Pretty Open Type only supports Google Fonts. More coming soon!

The site is generated through gulp. Fork and clone the repo and install the following modules: 

```
npm install gulp-stylus gulp-autoprefixer gulp-jade gulp-embedlr gulp-uglify gulp-concat gulp-include gulp-clean gulp-connect gulp-if gulp-cssshrink
```

Add the `"name"`, `"type"`, and `"from"` into `data.js` in `src`. (Currently, `"form"` only supports the value `"google"`

Run `gulp` in the command line, push and make a pull request. Done!

---

## Something simpler..?

Open a [new issue](https://github.com/namanyayg/pretty-open-type/issues/new) with the font's name and (preferably) links, or create a pull request after adding font information into the `data.js` file.