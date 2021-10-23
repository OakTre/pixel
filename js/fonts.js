document.addEventListener("DOMContentLoaded", function(event) {
	WebFont.load({
		custom: {
			families: ['stampbor'],
			urls: ['./css/fonts.css'],
		},
		loading: function(familyName, fvd) {
			const progress = document.querySelector(".preloader__loader-gradient-line");
			const preloader = document.querySelector(".preloader");
			const progressText = document.querySelector(".preloader__text");
			let count = 4;
			let per = 4;
			let loading = setInterval(animate, 50);

			function animate() {
				if (count == 100 && per == 100) {
					clearInterval(loading);
					setTimeout(() => {
						preloader.style.opacity = "0";
					}, 500);
					setTimeout(() => {
						preloader.style.display = "none";
					}, 600);
				} else {
					per = per + 2;
					count = count + 2;
					progress.style.width = per + '%';
					progressText.textContent = count + '%';
				}

			}
		},
	});
});
