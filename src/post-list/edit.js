import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit({ attributes, setAttributes } ) {

	const {
		selectedCat,
		postCount
	} = attributes;

	const categories = useSelect(select =>
		select('core').getEntityRecords('taxonomy', 'category', { per_page: -1 })
	);

	let options = []
	if (categories) {
		options = categories.map((category) => ({ label: category.name, value: category.id }))
	}

	const inspectorControls = (
		<InspectorControls key="inspector">
			<PanelBody title={__('General', 'wp-challenges-pro')} initialOpen={true}>
				<SelectControl
					label={__('Category', 'wp-challenges-pro')}
					value={selectedCat}
					options={options}
					onChange={(selectedCat) => setAttributes({selectedCat})}
				/>
				<RangeControl
					label={__('Post Count', 'wp-challenges-pro')}
					value={postCount}
					onChange={(value) => setAttributes({ postCount: value })}
					min={1}
					max={30}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<div {...useBlockProps()}>
			{inspectorControls}
			<ServerSideRender
				block="wp-challenges-pro/post-list"
				attributes={attributes}
			/>
		</div>
	);
}
