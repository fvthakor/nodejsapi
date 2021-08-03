import config from '../../config/config'
import {Client} from 'plivo'

export default new Client(config.PLIVO_AUTH_ID,config.PLIVO_AUTH_TOKEN);