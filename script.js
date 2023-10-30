const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortArticles(bands) {
	const ignoredWords = ['a', 'an', 'the'];

	const customSort = (a, b) => {
		a = a.replace(/^(a|an|the) /i, '');
		b = b.replace(/^(a|an|the) /i, '');
		return a.localeCompare(b);
	};

	bands.sort(customSort);

	const bandList = document.getElementById('band');
	bands.forEach(article => {
		const listItem = document.createElement('li');
		listItem.textContent = article;
		bandList.appendChild(listItem);
	});
}

sortArticles(bands);