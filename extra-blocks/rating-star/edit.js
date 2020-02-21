/**
 * External dependencies
 */
import { View } from 'react-native';

/**
 * Internal dependencies
 */
import { StarIcon } from './icon';

export default () => {
	return (
		<View style={ { flex: 1, flexDirection: 'row' } }>
			<StarIcon filled={ true } />
			<StarIcon filled={ true } />
			<StarIcon filled={ true } />
			<StarIcon />
			<StarIcon />
		</View>
	);
};
