(function ($) {

// Replace bottom articles
$('.stpage').on('click', function (e) {
    e.preventDefault();
    const projectarticle = document.querySelector('.main.style5.primary');

    var fetchnumber = $(this).data('navpagenum');
    if (fetchnumber == 1) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Southern Tigers Concept'
        document.querySelector('.project').innerHTML = 'Southern Tigers<br>Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/st7.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st2.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st6.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st8.webp" />
        <img class="center-image-parallax" src="images/fulls/full/st9.webp" />
        <img class="center-image-parallax" src="images/fulls/full/su1.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom, rgb(46, 58, 141) 0%,rgba(228, 30, 42, 0.25) 100%), url("images/fulls/full/st1.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/st7.webp') center no-repeat";

        projectarticle.scrollIntoView();

    } else if (fetchnumber == 2) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Istinggar'
        document.querySelector('.project').innerHTML = 'Istinggar<br>Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/ic1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic2.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic6.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ic7.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp2.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/ic3.webp') center no-repeat";

        projectarticle.scrollIntoView();

    } else if (fetchnumber == 3) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Aerophantom Earbuds'
        document.querySelector('.project').innerHTML = 'Aerophantom<br>Earbuds';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/ae1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ae2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/ae3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/ae4.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp3.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/ae3.webp') center no-repeat";

        projectarticle.scrollIntoView();
    } else if (fetchnumber == 4) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Nordic Axe Concept'
        document.querySelector('.project').innerHTML = 'Nordic Axe<br>Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/na1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/na2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/na3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/na4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/na5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/na6.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom, rgb(78, 78, 80) 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp4.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/na2.webp') center no-repeat";

        projectarticle.scrollIntoView();
    } else if (fetchnumber == 5) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Harimau Malaya'
        document.querySelector('.project').innerHTML = 'Harimau<br>Malaya';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/hm1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/hm2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/hm3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/hm4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/hm5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/hm6.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom,  #FFD700 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp5.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp5.webp') center no-repeat";

        projectarticle.scrollIntoView();
    } else if (fetchnumber == 6) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Kelantan Home Concept'
        document.querySelector('.project').innerHTML = 'Kelantan Home<br>Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/cs1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/cs3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs6.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs7.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs8.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs9.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom,  #E50C11 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp6.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp6.webp') center no-repeat";

        projectarticle.scrollIntoView();
    } else if (fetchnumber == 7) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Kelantan Away Concept'
        document.querySelector('.project').innerHTML = 'Kelantan Away<br>Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/cs1a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs2a.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/cs3a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs4a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs5a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs6a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs7a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs8a.webp" />
        <img class="center-image-parallax" src="images/fulls/full/cs9a.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom,  #D1B31D 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp7.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp7.webp') top no-repeat";

        projectarticle.scrollIntoView();
    } else if (fetchnumber == 8) {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Sri Pahang X Voltra'
        document.querySelector('.project').innerHTML = 'Sri Pahang<br>X Voltra';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/sxv1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/sxv3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv5.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv6.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv7.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv8.webp" />
        <img class="center-image-parallax" src="images/fulls/full/sxv9.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom,  #FFD700 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp8.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp8.webp') center no-repeat";

        projectarticle.scrollIntoView();
    } else {
        $('#pdisplay').removeClass('hidden');

        document.querySelector('#header h1').innerHTML = 'Futuristic Sword Concept'
        document.querySelector('.project').innerHTML = 'Futuristic <br>Sword Concept';
        document.querySelector('.project-description').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';
        document.querySelector('.project-overview').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores quasi saepe quas quisquam obcaecati odio ';

        document.querySelector('.center-image-background').innerHTML = `
        <img class="center-image-parallax" src="images/fulls/full/rn1.webp" />
        <img class="center-image-parallax" src="images/fulls/full/rn2.webp" />	
        <img class="center-image-parallax" src="images/fulls/full/rn3.webp" />
        <img class="center-image-parallax" src="images/fulls/full/rn4.webp" />
        <img class="center-image-parallax" src="images/fulls/full/rn5.webp" />`;

        document.querySelector('#center-image').style.cssText = `
            background: linear-gradient(to bottom,  #FA8072 0%,rgba(15, 15, 15, 0.25) 100%), url("images/fulls/full/bp9.webp");
            background-size: cover;
            background-attachment: fixed;
            background-position: top center;
            background-repeat: no-repeat;`;
        document.querySelector('.artcontent .poster').style.background = "url('assets/css/images/overlay-poster.webp') left no-repeat, url('images/fulls/full/bp9.webp') center no-repeat";

        projectarticle.scrollIntoView();
    }
})

})(jQuery);