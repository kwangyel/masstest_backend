
function authorize(role){ 
    return (req,res,next)=>{
            if(req.decoded.role !== role){
                return  res.status(401).json({message: "Unauthorized"})
            }
            next()
        }
}

module.exports = authorize;