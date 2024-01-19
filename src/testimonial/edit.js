import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {

	const {
		authorName,
		jobTitle
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="quote-icon-testimonial">&ldquo;</div>
			<div className="quote-content-testimonial">
			<InnerBlocks
				template={[
					['core/paragraph', { 
						placeholder: __('Insert quote here', 'wp-challenges-pro'),
						content: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel venenatis lacus, at feugiat lacus.', 'wp-challenges-pro') 
					}]
				]}
			/>
			</div>
			<div className="meta-testimonial">
				<RichText
					className="author-testimonial"
					tagName="div"
					value={authorName}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					onChange={(authorName) => setAttributes({ authorName })}
					placeholder={__('Add Name...', 'wp-challenges-pro')}
				/>
				<RichText
					className="job-title-testimonial"
					tagName="div"
					value={jobTitle}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					onChange={(jobTitle) => setAttributes({ jobTitle })}
					placeholder={__('Add job title...', 'wp-challenges-pro')}
				/>
			</div>
		</div>
	);
}

