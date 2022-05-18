# HTML5 Boilerplate

A simple html5 boilerplate with modern javascript support.

## Features

- Industry standard structure
- 7-1 sass architecture
- Awesome linting support
- Image optimization after build project
- Included popular library like bootstrap & jquery
- Modern browser support
- Cross browser compatibility

## Tech Stack

**Languages:** HTML5, CSS3, JavaScript

**Libraries:** Scss, Bootstrap, Bootstrap Icons, jQuery

**Tools:** Node JS, Git, NPM, Webpack, Babel, ES List, Prettier

## Run Locally

Clone the project

```bash
  git clone https://github.com/md-ahr/js-boilerplate.git
```

Go to the project directory

```bash
  cd js-boilerplate-master
```

Install dependencies

```bash
  npm install
```

Install dependencies for linting support

```bash
  npm run lint
```

Start the developemnt server

```bash
  npm run dev
```

Build for production

```bash
  npm run build
```

## Usage/Examples

###### Folder Structure

```javascript
.vscode
 ┗ settings.json
public
 ┗ index.html
src
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┗ poppins
 ┃ ┃ ┃ ┣ Poppins-Bold.ttf
 ┃ ┃ ┃ ┣ Poppins-Light.ttf
 ┃ ┃ ┃ ┣ Poppins-Medium.ttf
 ┃ ┃ ┃ ┣ Poppins-Regular.ttf
 ┃ ┃ ┃ ┣ Poppins-SemiBold.ttf
 ┃ ┃ ┃ ┗ Poppins-Thin.ttf
 ┃ ┗ images
 ┃ ┃ ┣ svg
 ┃ ┃ ┃ ┗ icon-speaker.svg
 ┃ ┃ ┗ bar_icon_active.png
 ┣ js
 ┃ ┣ modules
 ┃ ┃ ┗ Calculator.js
 ┃ ┗ app.js
 ┗ scss
 ┃ ┣ abstracts
 ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┗ _variables.scss
 ┃ ┣ base
 ┃ ┃ ┣ _reset.scss
 ┃ ┃ ┗ _typography.scss
 ┃ ┣ components
 ┃ ┃ ┗ _button.scss
 ┃ ┣ helpers
 ┃ ┃ ┣ _functions.scss
 ┃ ┃ ┗ _media-query.scss
 ┃ ┣ layout
 ┃ ┃ ┣ _footer.scss
 ┃ ┃ ┣ _grid.scss
 ┃ ┃ ┣ _header.scss
 ┃ ┃ ┣ _navigation.scss
 ┃ ┃ ┗ _sidebar.scss
 ┃ ┣ pages
 ┃ ┃ ┗ _home.scss
 ┃ ┣ themes
 ┃ ┃ ┗ _theme.scss
 ┃ ┗ app.scss
webpack
 ┣ webpack.config.common.js
 ┣ webpack.config.dev.js
 ┣ webpack.config.js
 ┗ webpack.config.prod.js
.babelrc
.eslintrc
.gitignore
package-lock.json
package.json
postcss-preset-env.js
README.md
```

###### webpack/webpack.config.js

```javascript
const envConfig =
  process.env.NODE_ENV === "production"
    ? require("./webpack.config.prod.js")
    : require("./webpack.config.dev.js");
```

###### webpack/webpack.config.common.js

```javascript
entry: {
  app: path.resolve(__dirname, "../src", "js/app.js"),
},
```

###### src/scss/base/\_typography.scss

```javascript
@font-face {
  font-family: "poppins-semibold";
  src: url("../assets/fonts/poppins/Poppins-SemiBold.ttf");
}

@font-face {
  font-family: "poppins-medium";
  src: url("../assets/fonts/poppins/Poppins-Medium.ttf");
}
```

###### src/scss/helpers/\_media-query.scss

```javascript
$breakpoints:('mobile': (min-width: 360px),
  'largeMobile': (min-width: 425px),
  'xlMobile': (min-width: 600px),
  'tablet': (min-width: 768px),
  'smallLaptop': (min-width: 992px),
  'laptop': (min-width: 1200px),
  'desktop': (min-width: 1400px)
);
@mixin respondScreen($screen) {
  @if map-has-key($breakpoints, $screen) {
    @media #{inspect(map-get($breakpoints, $screen))} {
      @content;
    }
  }
  @else {
    @warn "Unfortunately, no value could be retrieved from `#{$screen}`. ";
  }
}
```

###### src/scss/app.scss

```javascript
@import '~bootstrap/dist/css/bootstrap.min.css';

// Abstracts
@import "abstracts/variables";
@import "abstracts/mixins";

// Vendors - If Needed
@import "vendors/*.css";

// Base
@import "base/reset";
@import "base/typography";

// Helpers
@import "helpers/functions";
@import "helpers/media-query";

// Layout
@import "layout/navigation";
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/sidebar";

// Components
@import "components/button";

// Pages
@import "pages/home";

// Themes
@import "themes/theme";

```

## Roadmap

- Add tailwind css
- Add typescript
- Implement Dark/light theme configuration

## Contributing

Contributions are always welcome!

## Feedback

If you have any feedback, please reach out to me at ahr.web.pro@gmail.com

## Authors

- [@md-ahr](https://www.github.com/md-ahr)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://iamhalim.com/)

[![linkedin](https://img.shields.io/badge/linkedin_profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdul-halim123/)

## Support

For support, email ahr.web.pro@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
