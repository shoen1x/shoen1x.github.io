//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

	// Webpack aset import
	const importAll = require =>
	require.keys().reduce((acc, next) => {
		acc[next.replace("../../", "")] = require(next);
		return acc;
	}, {});

	importAll(
		require.context('../../images/fulls/', true, /\.webp$/),
		require.context('../../images/3D/', true, /\.(glb|webp)$/),
		require.context('../../images/og-images/', true, /(og-image).*\.jpg$/),
		require.context('../../images/ico/', true, /\.*$/),
		require.context('../../', true, /(sitemap.xml|robots.txt)$/),
		require.context('../../assets/js/', true, /(databank|blog-post).json$/),
	);

	// Mobile ejah tene dlu
	function isMobile() {
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))
	}

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// pecoh2 skrin
	breakpoints({
		xxlarge: ['1681px', '1920px'],
		xlarge: ['1281px', '1680px'],
		large: ['1001px', '1280px'],
		medium: ['737px', '1000px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// animasi putar2
	$window.on('load', function () {
		setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// teke2
	if (browser.mobile)
		$body.addClass('is-touch');
	else {

		breakpoints.on('<=small', function () {
			$body.addClass('is-touch');
		});

		breakpoints.on('>small', function () {
			$body.removeClass('is-touch');
		});

	}

	// Fix: IE flexbox fix.
	if (browser.name == 'ie') {

		var $main = $('.main.fullscreen'),
			IEResizeTimeout;

		$window
			.on('resize.ie-flexbox-fix', function () {

				clearTimeout(IEResizeTimeout);

				IEResizeTimeout = setTimeout(function () {

					var wh = $window.height();

					$main.each(function () {

						var $this = $(this);

						$this.css('height', '');

						if ($this.height() <= wh)
							$this.css('height', (wh - 50) + 'px');

					});

				});

			})
			.triggerHandler('resize.ie-flexbox-fix');

	}

	// Galeri
	$window.on('load', function () {

		var $gallery = $('.gallery');

		$gallery.poptrox({
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#1f2328',
			overlayOpacity: 0.65,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 50,
			usePopupNav: true
		});

		// Hack: Adjust margins when 'small' activates.
		breakpoints.on('>small', function () {
			$gallery.each(function () {
				$(this)[0]._poptrox.windowMargin = 50;
			});
		});

		breakpoints.on('<=small', function () {
			$gallery.each(function () {
				$(this)[0]._poptrox.windowMargin = 5;
			});
		});

	});

	// Section transitions.
	if (browser.canUse('transition')) {

		var on = function () {

			// Galleries.
			$('.gallery')
				.scrollex({
					top: '30vh',
					bottom: '30vh',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Generic sections.
			$('.main.style1')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			$('.main.style2')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			$('.main.style3')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			$('.main.style4')
				.scrollex({
					mode: 'middle',
					delay: 100,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Product Info.
			$('.infocontent')
				.scrollex({
					top: '50%',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Project Preview.
			$('#multiproject')
				.scrollex({
					top: '50%',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

			// Blog.
			$('#blog')
				.scrollex({
					top: '50%',
					delay: 50,
					initialize: function () { $(this).addClass('inactive'); },
					terminate: function () { $(this).removeClass('inactive'); },
					enter: function () { $(this).removeClass('inactive'); },
					leave: function () { $(this).addClass('inactive'); }
				});

		};

		var off = function () {

			// Galleries.
			$('.gallery')
				.unscrollex();

			// Generic sections.
			$('.main.style1')
				.unscrollex();

			$('.main.style2')
				.unscrollex();

			$('.main.style3')
				.unscrollex();

			$('.main.style4')
				.unscrollex();

			// Product Info.
			$('.infocontent')
				.unscrollex();

			// Project Preview.
			$('#multiproject')
				.unscrollex();

			// Blog.
			$('#blog')
				.unscrollex();

		};

		breakpoints.on('<=small', off);
		breakpoints.on('>small', on);

	}

	// Acara
	var resizeTimeout, resizeScrollTimeout;

	$window
		.on('resize', function () {

			// mati animasi
			$body.addClass('is-resizing');

			clearTimeout(resizeTimeout);

			resizeTimeout = setTimeout(function () {

				// Update scrolly links.
				$('a[href^="#"]').scrolly({
					speed: 1500,
					offset: $header.outerHeight() - 1
				});

				// Re-enable animations/transitions.
				setTimeout(function () {
					$body.removeClass('is-resizing');
					$window.trigger('scroll');
				}, 0);

			}, 100);

		})
		.on('load', function () {
			$window.trigger('resize');
		});

	var slideShow = function (container) {
		this.images = [];//public var
		this.curImage = 0;
		for (i = 0; i < container.childElementCount; i++) {
			this.images.push(container.children[i]);
			this.images[i].style.display = "none";
		}

		// Handle going to to the next slide
		var nextSlide = function () {
			for (var i = 0; i < this.images.length; i++) {
				this.images[i].style.display = "none";
			}
			this.images[this.curImage].style.display = "block";
			this.curImage++;
			if (this.curImage >= this.images.length) {
				this.curImage = 0;
			}
			window.setTimeout(nextSlide.bind(this), 5000);
		};

		nextSlide.call(this);
	};
	var slike = document.getElementById("slideshow");
	slideShow(slike);

	// putar2
	$(function () {
		$('.client-slider').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2100,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}]
		});

		$('.ads-slider').slick({
			accessibility: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 8000,
			arrows: false,
			dots: false,
			pauseOnHover: true,
			centerPadding: "8px",
			centerMode: true,
		});
	});

	// Ambik sekut ikut 'home'
	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	const lang_injection = getCookie("firebase-language-override");

	// 3D
	const modelViewerVariants = document.querySelector("model-viewer#playcard");
	const select = document.querySelector('#variant');
	
	modelViewerVariants.addEventListener('load', () => {
	  const names = modelViewerVariants.availableVariants;
	  for (const name of names) {
		const option = document.createElement('option');
		option.value = name;
		switch(option.value){
			case 'JDT':
				if(lang_injection == 'ms'){
					option.textContent = 'Jersi Konsep Johor Darul Ta`zim';
				}else {
					option.textContent = 'Johor Darul Ta`zim Jersey Concept';
				}
				break;
			case 'HM':
				if(lang_injection == 'ms'){
					option.textContent = 'Jersi Konsep Harimau Malaya';
				}else {
					option.textContent =  'Harimau Malaya Jersey Concept';
				}
				break;
		}
		select.appendChild(option);
	  }
	  // Adds a default option.
	//   const option = document.createElement('option');
	// 	option.value = 'HM';
	// 	option.textContent = 'Harimau Malaya Concept';
		// select.appendChild(option);
	});
	
	select.addEventListener('input', (event) => {
	  modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;

	  switch(modelViewerVariants.variantName){
		case 'JDT':
			document.querySelector('#behancerd').href = "https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios"
			if(lang_injection == 'ms'){
				document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JERSI KONSEP<br>JOHOR DARUL TA'ZIM");
			}else {
				document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT");
			}
			$('#second-1').attr("id","second");
		break;
		case 'HM':
			document.querySelector('#behancerd').href = "https://www.behance.net/gallery/145829475/Harimau-Malaya-Concept-Shoenix-Studios"
			if(lang_injection == 'ms'){
				document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JERSI KONSEP<br>HARIMAU MALAYA");
			}else {
				document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("HARIMAU MALAYA HOME<br>JERSEY CONCEPT");
			}
			$('#second').attr("id","second-1");
		break;
	  }
	});

	// var btndownload = document.querySelectorAll('#btn-download');
	// $(btndownload).on('click', function (event) {
	// 	event.preventDefault();
	// 	$(this).addClass("downloaded");
	// 	var dwbutton = $(this).data('dwbutton');
	// 	setTimeout(function () {
	// 		if (dwbutton == 1) {
	// 			DownloadFile('images/downloadfile/NeuroKit-Wallpaper.png', 'Neuro Kit Wallpaper - Shoenix Studios');
	// 		} else if (dwbutton == 2) {
	// 			DownloadFile('images/downloadfile/TigerLeap-Wallpaper.jpg', 'Tiger Leap Wallpaper - Shoenix Studios');
	// 		} else {
	// 			alert("Don't know how you get here!");
	// 		}
	// 		$(btndownload).removeClass('downloaded');
	// 	}, 2000);
	// });

	// function DownloadFile(fileloc, filename) {
	// 	fetch(fileloc)
	// 		.then(resp => resp.blob())
	// 		.then(blob => {
	// 			const url = window.URL.createObjectURL(blob);
	// 			const a = document.createElement('a');
	// 			a.style.display = 'none';
	// 			a.href = url;
	// 			// the filename you want
	// 			a.download = filename;
	// 			document.body.appendChild(a);
	// 			a.click();
	// 			window.URL.revokeObjectURL(url);
	// 		})
	// 		.catch(() => alert('Error! Contact Admin on shoenixstudios@gmail.com'));
	// }

	// Hanya Allah yang tahu
})(jQuery);