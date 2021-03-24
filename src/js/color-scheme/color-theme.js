export function colorTheme() {
	const $switcher = document.querySelector('.switch-btn');
	const $switcherContentDark = document.querySelector('.switch-btn__content--dark');
	const $switcherContentLight = document.querySelector('.switch-btn__content--light');
	const $darkThemeClass = 'dark-theme';
	let $isDark;

	// If user has already selected a specific theme apply it
	initTheme();

	// Listens for a click on the button
	$switcher.addEventListener('click', function() {
		changeTheme();

		// localStorage
		// Saves theme
		if($isDark){
			localStorage.setItem('themeSwitch', 'dark');
		}
		// Resets theme selection
		else {
			localStorage.setItem('themeSwitch', 'light');
		}
	});

	// Switch theme and change the name of the button
	function changeTheme(initThemeIsDark) {
		if(!$isDark || initThemeIsDark) {
			// Adds the class for the <body>
			document.body.classList.add($darkThemeClass);

			// Shows the another name of the button
			$switcherContentLight.style.display = 'inline-flex';
			$switcherContentDark.style.display = 'none';
			$isDark = true;
		}
		else {
			// Removes the class from the <body>
			document.body.classList.remove($darkThemeClass);

			// Shows the another name of the button
			$switcherContentLight.style.display = 'none';
			$switcherContentDark.style.display = 'inline-flex';
			$isDark = false;
		}
	}

	function initTheme() {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let $initThemeIsDark = ((localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark') || (prefersDark && !localStorage.getItem('themeSwitch')));

		// Switches to a specific theme on a load page
		if ($initThemeIsDark) {
			changeTheme($initThemeIsDark);
		}
	}
}
