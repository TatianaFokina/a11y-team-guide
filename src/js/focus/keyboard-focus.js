export function keyboardFocus() {
	// Adds keyboard-accessible class to the <body>
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Tab') {
			document.body.classList.add('keyboard-focus');
		}
	});

	// Removes class from body in CSS
	document.addEventListener('mousedown', () => {
		document.body.classList.remove('keyboard-focus');
	});
}
