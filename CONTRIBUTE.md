# Contribute

Currently, the Pretty Open Type only supports Google Fonts. More coming soon!

The site is generated through gulp. Clone the repo and install the following modules: 

```
npm install gulp-stylus gulp-autoprefixer gulp-jade gulp-embedlr gulp-uglify gulp-concat gulp-include gulp-clean gulp-connect gulp-if gulp-cssshrink
```

Add your font, type, and from into `data.js` in the `src` folder. (Current supported `from` is `google`, *i.e.*, Google Web Fonts).

Run `gulp` in the command line, done!

---

If you're looking for a simple way to contribute, simply open a New Issue or create a pull request by editing the `data.js` file.