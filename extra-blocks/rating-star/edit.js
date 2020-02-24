/**
 * External dependencies
 */
import { range } from 'lodash';
import { TouchableWithoutFeedback, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { RangeControl, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { StarIcon } from './icon';

const TouchableStarIcon = ( { filled, onPress } ) => {
	return (
		<TouchableWithoutFeedback onPress={ onPress }>
			<View>
				<StarIcon filled={ filled } />
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ( { attributes: { maxRating, rating }, setAttributes } ) => {
	return (
		<View style={ { flex: 1, flexDirection: 'row' } }>
			{
				range( 1, maxRating + 1 ).map( ( starNumber ) => (
					<TouchableStarIcon
						key={ starNumber }
						filled={ starNumber <= rating }
						onPress={ () => setAttributes( { rating: starNumber } ) }
					/>
				) )
			}
			<InspectorControls>
				<PanelBody title={ __( 'Star Rating settings' ) }>
					<RangeControl
						label={ __( 'Highest rating' ) }
						minimumValue={ 2 }
						maximumValue={ 10 }
						separatorType={ 'none' }
						value={ maxRating }
						onChange={ ( newMaxRating ) => setAttributes( { maxRating: newMaxRating } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</View>
	);
};
