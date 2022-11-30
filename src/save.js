/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

// import tippy from "tippy.js";
// import "tippy.js/themes/material.css";

export default function save({ attributes }) {
	const {
		show,
		align,
		// title,
		// titleSize,
		// content,
		backgroundColor,
		// textColor,
		imageURL,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div class="wp-block-image-tooltip-wrapper">
				<img class="wp-block-image-tooltip-image" src={imageURL} alt="" />
				<div class="wp-block-image-tooltip-popup-wrapper ">
					<div class="wp-block-image-tooltip-popup">
						<div class="wp-block-image-tooltip-message">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
			<script src="https://unpkg.com/@popperjs/core@2"></script>
			<script src="https://unpkg.com/tippy.js@6"></script>
		</div>
	);
}
