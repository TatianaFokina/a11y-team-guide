export function switchScheme() {
	// Select the button
	const toggle = document.querySelector(".toggle__label");

	// Listen for a click on the toggle
	toggle.addEventListener("click", function() {
		document.body.classList.toggle("dark-scheme");
	});
}
