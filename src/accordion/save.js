import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<h1>Accordion Parent</h1>
			<InnerBlocks.Content />
		</div>
	);
}
