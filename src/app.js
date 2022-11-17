/**
 * Generate content for Table of contents link list.
 */
document.addEventListener( 'DOMContentLoaded', runTocBlock );

/**
 * Run function after DOMContentLoaded is loaded.
 */
function runTocBlock() {
	const tocToggle = document.querySelector('#toc-toggle');
	const tocMenu   = document.querySelector('#toc-links');

	const domSelector = ( tocToggle !== null ) ? tocToggle.getAttribute( 'data-selector' ) : null;
	const mainTitles  = ( domSelector !== null ) ? document.querySelectorAll( domSelector ) : null;
	const foundTitles = ( mainTitles !== null ) ? getTocTitles( mainTitles ) : null;

	// Run stuff if all used element are found.
	if ( foundTitles !== null && tocMenu !== null && tocToggle !== null ) {

		// Generate ToC links into list.
		foundTitles.forEach(function( el, index ) {
			tocMenu.innerHTML += '<li><a href="#' + el.id + '">' + el.title + '</a></li>';
		});

		// Simple click event for toggle button.
		tocToggle.addEventListener( 'click', (el) => onTocToggle( tocToggle, tocMenu ) );
	}
}

/**
 * Toggle button click.
 */
function onTocToggle( toggleEl, expandEl ) {

	// Do not excecute toggle functions for summary.
	if ( 'summary' === toggleEl.tagName.toLowerCase() ) {
		return;
	}

	// Detect current expanded status og toggle element.
	let expanded = toggleEl.getAttribute('aria-expanded');

	// Check toggle stage.
	if ( 'true' === expanded ) {
		toggleEl.setAttribute( 'aria-expanded', false );
		expandEl.setAttribute( 'hidden', '' );
	} else {
		toggleEl.setAttribute( 'aria-expanded', true );
		expandEl.removeAttribute( 'hidden' );
	}
}

/**
 * Return element content and cleaned ID information from querySelectorAll element.
 */
function getTocTitles( querySelectorAll ) {
	let returnArr = [];

	querySelectorAll.forEach(function( el ) {
		// Get stuff to variables.
		const title = el.innerText || el.textContent;

		// Skip this element if there is empty content in element.
		if ( '' === title ) {
			console.log( 'ToC: empty title detected');
			return;
		}

		const id = title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase(); // remove spaces, special charasters and capital letters.
		const level = el.tagName.toLowerCase();

		// Set custom ID for element.
		el.id = id;
		

		// Push values to array that will be returned for later use.
		returnArr.push({
            title: title,
            id: id,
			level : level,
        });

	});

	return returnArr;
}
