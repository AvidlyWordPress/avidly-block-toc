

/**
 * External Dependencies
 */
 const path = require( 'path' );

 /**
  * WordPress Dependencies
  */
 const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );
 
 module.exports = {
	 ...defaultConfig,
    entry: {
        ...defaultConfig.entry,
		"app": path.resolve( process.cwd(), 'src', 'app.js' ),
    }
 }