import jwt from 'jsonwebtoken'
import config from '../../config/config'



const verifyJwt=(disableJwt)=>{
    return (req,res,next)=>{
    if(disableJwt.includes(req.path))
    {
        next()
    }else{
    try {
    if(!req.headers.authorization){
        return res.status(401).send(
            {
                error:true,
                statusCode:401,
                message:`Required Authorization token`
            }
          );  
    }
    const match = req.headers.authorization.match(/^Bearer (.*)$/);
    if (!match || match.length < 2) {
      return res.status(401).send(
          {
              error:true,
              statusCode:401,
              message:`Invalid Authorization token"`
          }
        );
    }
        const decoded=jwt.verify(match[1],config.JWT_SECRET);
        req.user=decoded    
    } catch (error) {
        return res.status(403).send({
            error:true,
            statusCode:403,
            message:"Invalid Authorization token"
        })
    }
    return next();
}
}
}

export default verifyJwt;