// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.parallax')
console.log(parallaxElements);

// The parallax function
const parallax = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach( element => {
				let y = window.innerHeight - element.getBoundingClientRect().top
				if (y > 0) {
					element.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
				}
			})
		}
	}

//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
		parallax(parallaxElements)
}