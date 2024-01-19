import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const {
		titleAccordion,
		toggleOpen
	} = attributes;
	const inspectorControls = (
		<InspectorControls key="inspector">
			<PanelBody title={__('General', 'wp-challenges-pro')} initialOpen={true}>
				<ToggleControl
					label={__('Display open', 'wp-challenges-pro')}
					checked={toggleOpen}
					onChange={(value) => setAttributes({ toggleOpen: value })}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<div {...useBlockProps()}>
			{inspectorControls}
			<div className='container-accordion-pro'>
				<div className="title-accordion-pro">
					<span className="toggle-icon-pro">&#8250;</span>
					<RichText
						className="title-accordion-inline-pro"
						tagName="div"
						value={titleAccordion}
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
						onChange={(titleAccordion) => setAttributes({ titleAccordion })}
						placeholder={__('Add Title...', 'wp-challenges-pro')}
					/>
					{(toggleOpen == false) && (<span className="hidden-editor">{__('Closed by default', 'wp-challenges-pro')}</span>)}
				</div>
				<div className="content-accordion-pro">
					<InnerBlocks
						template={[
							['core/paragraph', {
								placeholder: __('Add content...', 'wp-challenges-pro'),
								content: __('Content goes here', 'wp-challenges-pro'),
								style: {
									"spacing": {
										"padding": ".4rem 1rem"
									}
								}
							}]
						]}
					/>
				</div>
			</div>
		</div>
	);
}

