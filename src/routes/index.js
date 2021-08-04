import express               from 'express';
import userRoutes            from './user';
import authRoutes            from './auth';
import noteRoutes            from './note';
//import videoMangaementRoutes from './videoManagement';
//import senderGroupsRoutes    from './senderGroup';
//import groupsRoutes          from './group';
//import smsTemplateRoutes     from './smsTemplate';
//import optManagemeRoutes     from './optManagement';
//import quickSmsRoutes        from './quickSms'
//import blacklistRoutes       from './blacklist'
//import plivoSettingRoutes    from './plivoSetting'
//import campaignRoutes        from './campaign';
//import plivoRoutes           from './plivo'


const router =express.Router()


userRoutes(router);
authRoutes(router);
noteRoutes(router);
/*videoMangaementRoutes(router);
senderGroupsRoutes(router);
groupsRoutes(router);
smsTemplateRoutes(router);
optManagemeRoutes(router);
quickSmsRoutes(router);
blacklistRoutes(router);
plivoSettingRoutes(router);
campaignRoutes(router);
plivoRoutes(router);*/



 export default router;
