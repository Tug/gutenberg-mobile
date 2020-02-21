/**
 * External dependencies
 */
import { range } from 'lodash';
import { TouchableWithoutFeedback, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

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

export default () => {
	const [ rating, setRating ] = useState( 3 );
	return (
		<View style={ { flex: 1, flexDirection: 'row' } }>
			{
				range( 1, 6 ).map( ( starNumber ) => (
					<TouchableStarIcon
						key={ starNumber }
						filled={ starNumber <= rating }
						onPress={ () => setRating( starNumber ) }
					/>
				) )
			}
		</View>
	);
};
