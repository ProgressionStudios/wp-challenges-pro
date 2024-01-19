import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		authorName,
		jobTitle
	} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className="quote-icon-testimonial">&ldquo;</div>
			<div className="quote-content-testimonial">
				<InnerBlocks.Content />
			</div>
			<div className="meta-testimonial">
				<RichText.Content {...useBlockProps} tagName="div" value={authorName} />
				<RichText.Content {...useBlockProps} tagName="div" value={jobTitle} />
			</div>
		</div>
	);
}
