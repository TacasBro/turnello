import LazyLoad from "vanilla-lazyload";

const logEvent = (eventName, element) => {
	console.log(
		Date.now(),
		eventName,
		element.getAttribute("data-src"),
		element.getAttribute("src")
	);
};

const lazyLoadOptions = {
	elements_selector: ".lazy",
	to_webp: true
};

const createLazyLoadInstance = () => {
	return new LazyLoad(lazyLoadOptions);
};

export default () => {
	document.addEventListener("DOMContentLoaded", createLazyLoadInstance);
};