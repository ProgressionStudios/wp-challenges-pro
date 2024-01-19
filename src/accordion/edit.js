import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import './editor.scss';

export default function Edit({ clientId }) {

	const { insertBlock } = useDispatch('core/block-editor');
	const addAccordionItem = () => {
		const created = createBlock('wp-challenges-pro/accordion-child', [], []);
		insertBlock(created, undefined, clientId);
	};

	return (
		<div {...useBlockProps()}>

			<InnerBlocks
				allowedBlocks={['wp-challenges-pro/accordion-item']}
				template={[
					['wp-challenges-pro/accordion-child', { titleAccordion: __('Accordion Title 1', 'wp-challenges-pro'), toggleOpen: true }],
					['wp-challenges-pro/accordion-child', { titleAccordion: __('Accordion Title 2', 'wp-challenges-pro') }],
					['wp-challenges-pro/accordion-child', { titleAccordion: __('Accordion Title 3', 'wp-challenges-pro') }]
				]}
			/>
			<Button
				className="accordian-button-appendor"
				variant="secondary"
				text={__('Add Accordion Item', 'wp-challenges-pro')}
				icon={
					<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				}
				iconPosition='left'
				onMouseDown={addAccordionItem}
			/>

		</div>
	);
}

