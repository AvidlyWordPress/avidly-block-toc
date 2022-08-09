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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {

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
