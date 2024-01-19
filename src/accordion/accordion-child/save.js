import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		titleAccordion,
		toggleOpen
	} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className={(toggleOpen) ? ('container-accordion-pro') : ('container-accordion-pro hide')}>
				<div className="title-accordion-pro">
					<span className="toggle-icon-pro">&#8250;</span>
					<RichText.Content {...useBlockProps} value={titleAccordion} />
				</div>
				<div className="content-accordion-pro">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
