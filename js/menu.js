'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}
}(document, window));


// Download Button START

// Get the necessary elements
const generateBtn = document.getElementById("generateBtn");
const progressBar = document.getElementById("progressBar");
const successText = document.getElementById("successText");
const downloadBtn = document.getElementById("downloadBtn");

// Function to simulate the download generation process
function generateDownloadLink() {
	generateBtn.style.display = "none"; // Hide the generate download link button
	progressBar.style.display = "block"; // Show the progress bar

	// Simulate a 15-second process
	setTimeout(() => {
		progressBar.style.display = "none"; // Hide the progress bar
		successText.style.display = "block"; // Show the success text
		downloadBtn.style.display = "block"; // Show the download button
	}, 15000);
}

// Event listener for the generate download link button
generateBtn.addEventListener("click", generateDownloadLink);


// Download Button END