/**
 * External dependencies
 */
import { range } from 'lodash';
import { TouchableWithoutFeedback, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { RangeControl, PanelBody } from '@wordpress/components';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
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

const alignToFlex = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
};

export default ( { attributes: { align, maxRating, rating }, setAttributes } ) => {
	return (
		<View style={ { flex: 1, flexDirection: 'row', justifyContent: alignToFlex[ align ] } }>
			{
				range( 1, maxRating + 1 ).map( ( starNumber ) => (
					<TouchableStarIcon
						key={ starNumber }
						filled={ starNumber <= rating }
						onPress={ () => setAttributes( { rating: starNumber } ) }
					/>
				) )
			}
			<BlockControls>
				<AlignmentToolbar
					isCollapsed={ false }
					value={ align }
					onChange={ ( newAlign ) => {
						setAttributes( { align: newAlign } );
					} }
				/>
			</BlockControls>
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
