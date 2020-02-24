
export default ( { attributes: { rating } } ) => {
	return '⭐'.repeat( Math.floor( rating ) ) + ( ( rating % 1 > 0 ) ? '✨' : '' );
};
