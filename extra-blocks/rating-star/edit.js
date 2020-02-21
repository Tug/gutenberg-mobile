/**
 * External dependencies
 */
import { range } from 'lodash';
import { TouchableWithoutFeedback, View } from 'react-native';

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

export default ( { attributes: { rating }, setAttributes } ) => {
	return (
		<View style={ { flex: 1, flexDirection: 'row' } }>
			{
				range( 1, 6 ).map( ( starNumber ) => (
					<TouchableStarIcon
						key={ starNumber }
						filled={ starNumber <= rating }
						onPress={ () => setAttributes( { rating: starNumber } ) }
					/>
				) )
			}
		</View>
	);
};
