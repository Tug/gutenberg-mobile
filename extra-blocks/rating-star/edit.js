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
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StarIcon } from './icon';

const TouchableStarIcon = ( { disabled, filled, onPress, selected } ) => {
	const selectedStyles = {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 3,
	};
	return (
		<TouchableWithoutFeedback disabled={ disabled } onPress={ onPress }>
			<View style={ selected ? selectedStyles : null }>
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

export default ( { attributes: { align, maxRating, rating }, isSelected, setAttributes } ) => {
	const [ lastSelectedStar, updateLastSelected ] = useState( 0 );

	useEffect( () => {
		if ( ! isSelected ) {
			updateLastSelected( 0 );
		}
	}, [ isSelected ] );

	return (
		<View style={ { flex: 1, flexDirection: 'row', justifyContent: alignToFlex[ align ] } }>
			{
				range( 1, maxRating + 1 ).map( ( starNumber ) => {
					let filled = starNumber <= rating;
					if ( rating + 1 - starNumber >= 0.5 && rating - starNumber < 0 ) {
						filled = 0.5;
					}
					return (
						<TouchableStarIcon
							key={ starNumber }
							disabled={ ! isSelected }
							filled={ filled }
							selected={ starNumber === lastSelectedStar }
							onPress={ () => {
								const minusHalf = starNumber === rating ? -0.5 : 0;
								setAttributes( { rating: starNumber + minusHalf } );
								updateLastSelected( starNumber );
							} }
						/>
					);
				} )
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
