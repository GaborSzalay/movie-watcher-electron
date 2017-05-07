const showUpDefaultSection = () => {
    const defaultSection = document.getElementsByClassName('default-visible')[0];
    defaultSection.classList.remove('hidden');
};

const getContent = (navOption) => {
	const linkTarget = navOption.getAttribute('href');
	return document.getElementById(linkTarget.slice(1));
}

const getContentsFor = (navOptions) => {
	let contents = [];

    for (let counter = 0; counter < navOptions.length; counter++) {
    	const navOption = navOptions[counter];
    	contents.push(getContent(navOption));
    }
    return contents;
};

const hideAllContent = (contents) => {
	contents.forEach((content) => {
		content.classList.add('hidden');
	});
};

const processNavigationLinks = () => {
    const navigation = document.getElementsByTagName('nav')[0];
    const navOptions = navigation.getElementsByTagName('a');

    const contents = getContentsFor(navOptions);

    for (let counter = 0; counter < navOptions.length; counter++) {
		const navOption = navOptions[counter];

		navOption.addEventListener("click", function(event){
			event.preventDefault();
			hideAllContent(contents);

			getContent(navOption).classList.remove('hidden');
		});
    }
    //
};

const init = () => {
    showUpDefaultSection();
    processNavigationLinks()
};

module.exports = {
    init
}