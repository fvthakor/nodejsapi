const path = require( 'path' );
import dotenv from 'dotenv';
const envFound = dotenv.config({ path: path.join(__dirname, `../.env`) });
    const config = {
        'MODE': 'Development',
        'PORT': process.env.PORT || 5000,
        'MONGO_URL': process.env.MONGO_URL,
        'UPLOAD_PATH': path.resolve( `${__dirname }/../uploads` ),
        'JWT_SECRET': process.env.JWT_SECRET, 
        'PLIVO_AUTH_ID': process.env.PLIVO_AUTH_ID,
        'PLIVO_AUTH_TOKEN': process.env.PLIVO_AUTH_TOKEN
    };

    // Modify for Production
    if ( process.env.NODE_ENV === 'production' ) {
        config.MODE = 'Production';
    }
export default config;