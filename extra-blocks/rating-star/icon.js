/**
 * WordPress dependencies
 */
import { Path, SVG, Defs, LinearGradient, Stop } from '@wordpress/components';

export const StarBlockIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
	</SVG>
);

export const StarIcon = ( props ) => {
	const color = props.color || 'black';
	const backgroundOpacity = props.backgroundOpacity || 0.33;
	let fillValue;
	if ( props.filled === true ) {
		fillValue = 1;
	} else if ( props.filled === false || isNaN( props.filled ) ) {
		fillValue = 0;
	} else {
		fillValue = Number( props.filled );
	}

	return (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			color={ color }
			style={ { fillOpacity: props.filled ? 1 : 0.33 } }
		>
			<Defs>
				{ /* eslint-disable-next-line no-restricted-syntax */ }
				<LinearGradient id="starFill">
					<Stop offset={ Math.floor( fillValue * 100 ) + '%' } stopColor={ color } stopOpacity={ 1 } />
					<Stop offset={ Math.floor( fillValue * 100 ) + '%' } stopColor={ color } stopOpacity={ backgroundOpacity } />
				</LinearGradient>
			</Defs>
			<Path
				fill="url(#starFill)"
				d="M12,17.3l6.2,3.7l-1.6-7L22,9.2l-7.2-0.6L12,2L9.2,8.6L2,9.2L7.5,14l-1.6,7L12,17.3z"
			/>
		</SVG>
	);
};
