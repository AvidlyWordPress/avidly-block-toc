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
import {
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	TextControl,
	CheckboxControl
} from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { title, isOpen, querySelector },
		setAttributes,
		className,
	} = props;


	return [
		<InspectorControls>
			<Panel>
				<PanelBody>
					<TextControl
						label={ __( 'List title', 'avidly-block-toc' ) }
						value={ title || __( 'Table of contents', 'avidly-block-toc' ) }
						onChange={ ( title ) => setAttributes( { title } ) }
					/>

					<CheckboxControl
						label = {  __( 'Show list open by default', 'avidly-block-toc' ) }
						checked = { isOpen }
						onChange={ newValue => {
						setAttributes({ isOpen: newValue });
						}}
					/>

					<TextControl
						label={ __( 'Elements (querySelectorAll)', 'avidly-block-toc' ) }
						value={ querySelector || '#main h2' }
						onChange={ ( querySelector ) => setAttributes( { querySelector } ) }
					/>
				</PanelBody>
			</Panel>
		</InspectorControls>,

		<nav { ...useBlockProps() } aria-label={ __( 'Table of contents', 'avidly-block-toc' ) }>
			<div class="toc">
				<button id="toc-toggle" type="button" aria-expanded={ isOpen ? true : false } aria-controls="toc-links" data-selector={ querySelector }>
					{ title || __( 'Table of contents', 'avidly-block-toc' ) }
				</button>
				
				<ul id="toc-links" { ...( isOpen ? {} : { hidden: 'true' } ) }>
					<li role="status">{ __('Automatically generated content links.', 'avidly-block-toc' ) }</li>
				</ul>
			</div>
		</nav>
	];
}
