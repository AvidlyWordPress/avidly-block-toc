/**
 * Generate content for Table of contents link list.
 */

const tocToggle = document.querySelector('#toc-toggle');
const tocMenu   = document.querySelector('#toc-links');

const jquerySelector = ( tocToggle !== null ) ? tocToggle.getAttribute('data-selector') : null;
const mainTitles     = ( jquerySelector !== null ) ? document.querySelectorAll( jquerySelector ) : null;
const foundTitles    = ( mainTitles !== null ) ? getTocTitles( mainTitles ) : null;


// Run stuff if all used element are found.
if ( foundTitles !== null && tocMenu !== null && tocToggle !== null ) {

	// Generate ToC links into list.
	foundTitles.forEach(function( el ) {
		tocMenu.innerHTML += '<li><a href="#' + el.id + '">' + el.title + '</a></li>';
	});

	// Simple click event for toggle button.
	tocToggle.addEventListener( 'click', onTocToggle );
}

/**
 * Toggle button click.
 */
function onTocToggle() {
	
	// Detect current expanded status.
	let expanded = this.getAttribute('aria-expanded');

	// Check toggle stage.
	if ( 'true' === expanded ) {
		this.setAttribute( 'aria-expanded', false );
		tocMenu.setAttribute('hidden', '');
	} else {
		this.setAttribute( 'aria-expanded', true );
		tocMenu.removeAttribute('hidden');
	}
}

/**
 * Return element content and cleaned ID information from querySelectorAll element.
 */
function getTocTitles( querySelectorAll ) {
	let returnArr = [];

	querySelectorAll.forEach(function( el ) {
		// Get stuff to variables.
		const title = el.innerText;
		const id    = el.innerText.replace(/[^A-Z0-9]+/ig, "-").toLowerCase(); // remove spaces, special charasters and capital letters.

		// Set custom ID for element.
		el.id = id;

		// Push values to array that will be returned for later use.
		returnArr.push({
            title: title,
            id: id, 
        });

	});

	return returnArr;
}
