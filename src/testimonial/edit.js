import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const {
		quoteContent
	} = attributes;

	return (
		<div { ...useBlockProps() }>
			<div className="quote-icon-testimonial">&ldquo;</div>
			<RichText
				className="quote-content-testimonial"
				tagName="div"
				value={quoteContent}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
				onChange={(quoteContent) => setAttributes({ quoteContent })}
				placeholder={__('Insert quote here', 'wp-challenges-pro')}
			/>
			<div className="meta-testimonial">
				<h5 className="author-testimonial">Author Name</h5>
				<h6 className="position-testimonial">Job Title</h6>
			</div>
		</div>
	);
}
