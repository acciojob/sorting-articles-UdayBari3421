const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => {
	const ignoreWords = ['a', 'an', 'the'];
	const removeIgnoredWords = (str) => str.replace(/^(a|an|the) /i, '');
	return removeIgnoredWords(a).localeCompare(removeIgnoredWords(b));
});

const bandList = document.getElementById('bands');
sortedBands.forEach(article => {
	const listItem = document.createElement('li');
	listItem.textContent = article;
	bandList.appendChild(listItem);
});