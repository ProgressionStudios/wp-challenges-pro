import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const {
		titleAccordion,
		contentAccordion,
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

			<div className={(toggleOpen) ? ('container-accordion-pro') : ('container-accordion-pro hide')}>
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
				</div>
				<RichText
					className="content-accordion-pro"
					tagName="div"
					value={contentAccordion}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
					onChange={(contentAccordion) => setAttributes({ contentAccordion })}
					placeholder={__('Add content...', 'wp-challenges-pro')}
				/>
			</div>
		</div>
	);
}

