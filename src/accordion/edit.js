import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={['wp-challenges-pro/accordion-item']}
				template={[
					['wp-challenges-pro/accordion-child', { titleAccordion: __('Accordion title 1', 'wp-challenges-pro') }],
					['wp-challenges-pro/accordion-child', { titleAccordion: __('Accordion title 2', 'wp-challenges-pro') }]
				]}
			/>
		</div>
	);
}

