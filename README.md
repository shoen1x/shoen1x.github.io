<a name="readme-top"></a>

<!-- Header -->
<h1 align="center"><strong>Revenant's Formal<strong></h1>
<div align="center">
    <img src="https://shoenix-studios.web.app/images/svg/4c946665281fbe829fc5.svg" width="50%" alt="Revenant Formal">
  <p>
    A brief experimental project by <strong>NMVX</strong>
    <br />
    <a href="https://shoenix-studios.web.app/home"><strong>Quick access!</strong></a>
    </br>
  </p>
</div>

<!-- Contents -->
<div align="center">
<details>
  <summary>Contents</summary>
  <ol>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#use-by">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#authors-&-support">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgments</a></li>
  </ol>
</details>
</div>
<br/>


<!-- Build With -->
## Built With

[![HTML 5][HTML5.html]][HTML5-url]
[![Javascript][Javascript.js]][Javascript-url]
[![Jquery][Jquery.js]][Jquery-url]
[![Firebase][Firebase.js]][Firebase-url]
[![Webpack][Webpack.js]][Webpack-url]

- - - -
<br />


<!-- ROADMAP -->
## Roadmap

- ### Homepage
    - [x] Added favicon based `.ico`.
        - [x] Replaced favicon .ico with .svg+xml (Problematic with multiple .logos packages)
    - [x] Hero Images.
        - [x] Added new Shoenix's Assc system logos `(3)`.
    - [x] Parallax scrolling friendly background images.
    - [x] 3D Model preview.
        - [x] Disable interactive (Zoom, pitch, yaw, drag) to reduce GPU taxing and CPU overhead problems.
    - [x] [Jquery](https://jquery.com/) based poptrox gallery for new works display.
    - Game-card like images collection ***`Deprecated`***
        - Removed due to cluttered looking and performances issues
    - Dropdown menu ***`Deprecated`***
        - Re-sync with header and footer
    - Youtube section ***`Deprecated`***
        - Removed due to network and static website limitation
        - Resort to local stored video?.
    - Full project grid/carousel for multi images project (min 4 images) ***`Deprecated`***
    - [x] Collection/ Products card preview for product purchases, (See <a href="#product">Product</a> for more details).
        - [x] Redirect problematic solved.
    - [x] 'Experimental Project', new page replacing the project grid/carousel (See <a href="#project">Project</a> for more details).
    - [x] 'Developer Logs' for all new website version changes, (See <a href="#blog">Blog</a> for more details).

- ### Project
    - [x] Added new ***Project*** page
        - [x] News like project preview for Hero.
        - [x] Added carousel based selection.
            - [] Fix the js instability for selection (too much card jump from one selection to another).
        - [x] Grid based full preview with initial focus on click.
            - [] Fix problematic canvas display sizes for multiple ratio of display (`Problematic with (max-width: 480px) and (min-width: 408px)`).

- ### Product
    - [x] Added new ***Product*** page
        - [x] 4 Different `Collection` Based product.
        - [x] Redesign overview for product, technical specs, and documentation.
        - [x] Added new hotspot based garment inspection for more elaborate explanation about the interchangeability in product.
            - [x] Fixed canvas overflows.
        - [x] Added new product select card information with custom logo.
        - [] Added guides for templates.
        - [] New payment gateway
            - [] New custom inquery/ Order system in last section for `Product` page?

- ### Blog
    - [x] Blog page for documentation and versioning purposes.
        - [x] Simplified version, not tally to main website design.
        - [x] JSON Reacted versioning.

- ### Header and Footer
    - [x] Total revamped footer and header with more modern looking design.
        - [x] Added new breadcrumb likes for navigation display
        - [x] Fixed all hyperlinks `(<a>)` problems for web crawlers.
    - [x] Imported custom font.
        - Multi custom fonts? ***`Deprecated`***.
        - Change from futura to montserrat font family.

- ### Optimizations
    - [X] CSS Cleanup
        - [x] SASS/SCSS base, components, layout, libs cleanup
        - [] SASS/SCSS implementation fix later for more usable ***`Will change in future`***
    - [x] Javascript
        - [x] All js files cleanup
            - [x] Re-unified all redundances and extra codes into single unit, Minified using Babel in webpack.
        - Embbed (youtube.com) js network problem removed ***`Deprecated`***
    - [x] Assets & images
        - [X] Assets converted to webp for modern format.
        - [X] Optimized thumbs for better resolution and size for multiple display ratio.
    - Single page or new paging file?

- ### Ads banner ***`Deprecated`***

- ### Marquee Logos for 'service used by' ***`Deprecated, Will be replace with better design`***

- ### License generated

- ### NPM reoptimized
    - [x] Added all new following packages for major version (Build) changes;-
     ```javascript
        "devDependencies": {
            "@babel/core": "^7.21.3",
            "@babel/preset-env": "^7.20.2",
            "assets-webpack-plugin": "^7.1.1",
            "babel-loader": "^9.1.2",
            "clean-webpack-plugin": "^4.0.0",
            "copy-webpack-plugin": "^11.0.0",
            "css-loader": "^6.7.3",
            "html-loader": "^4.2.0",
            "html-webpack-plugin": "^5.5.0",
            "json-loader": "^0.5.7",
            "mini-css-extract-plugin": "^2.7.3",
            "webpack": "^5.76.1",
            "webpack-cli": "^5.0.1"
        }
    ```


***`Webpack implemented`***
```javascript
  "scripts": {
    "dev": "set NODE_ENV=development&& webpack --mode development",
  }
```

- - - -
<br />

<!-- Contributing -->
## Contributing

If you have a suggestion that would make this website better, please [open issues](https://github.com/shoen1x/Revenant-Formal/issues). You can also simply open an issue with the tag "enhancement".

1. Identify the problem or suggestions
2. Create your new [issues](https://github.com/shoen1x/Revenant-Formal/issues)
3. Submit

<!-- License -->
## License

Distributed under the 'CC0 1.0 Universal' License. See `LICENSE.txt` or [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) for more information.
<br/>
\

<!-- Authors & Support -->
## Support

> [NMVX](https://www.github.com/shoen1x)

`For support, email shoenixstudios@gmail.com.`

<!-- Ackdnowledgements -->
## Acknowledgements

 - [html5up](https://html5up.net/) for base template

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/shoen1x/shoen1x.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/shoen1x/Revenant-Formal/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/shoen1x/shoen1x.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/shoen1x/Revenant-Formal/issues
[license-shield]: https://img.shields.io/github/license/shoen1x/shoen1x.github.io.svg?style=for-the-badge
[license-url]: https://github.com/shoen1x/Revenant-Formal/blob/master/LICENSE.txt
[Jquery.js]: https://img.shields.io/badge/JQUERY-20232A?style=for-the-badge&logo=jquery&logoColor=61DAFB
[Jquery-url]: https://jquery.com/
[HTML5.html]: https://img.shields.io/badge/HTML5-20232A?style=for-the-badge&logo=html5&logoColor=61DAFB
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[Javascript.js]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=61DAFB
[Javascript-url]: https://www.oracle.com/java/technologies
[Webpack.js]: https://img.shields.io/badge/Webpack-20232A?style=for-the-badge&logo=webpack&logoColor=61DAFB
[Webpack-url]: https://webpack.js.org/
[Firebase.js]: https://img.shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=61DAFB
[Firebase-url]: https://firebase.google.com/
