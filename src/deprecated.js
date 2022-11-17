/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
import { useBlockProps } from '@wordpress/block-editor';


// Versio 1.0.x
const v1 = {

	attributes: {
		title: {
			type: 'string',
		},
		isOpen: {
			type: 'bool',
			default: false
		},
		querySelector: {
			type: 'string',
			default: '#main h2'
		},
	},

	save( props ) {

		const { title, isOpen, querySelector } = props.attributes;

		return (
			 <nav { ...useBlockProps.save() } aria-label={ __( 'Table of contents', 'avidly-block-toc' ) }>
				<div class="toc">
					<button id="toc-toggle" type="button" aria-expanded={ isOpen ? true : false } aria-controls="toc-links" data-selector={ querySelector }>
						{ title || __( 'Table of contents', 'avidly-block-toc' ) }
					</button>
	
					<ul id="toc-links" { ...( isOpen ? {} : { hidden: 'true' } ) }></ul>
				</div>
	
			</nav>
		);
	}
};

export default [ v1 ];