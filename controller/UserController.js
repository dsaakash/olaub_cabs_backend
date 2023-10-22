
const UserModel = require('../model/UserModel');






const register = async(req,res)=>{

    try {

        const user_mobile = req.body.mobile;

        const  user = new UserModel({
            mobile: user_mobile,
            dateCreate : Date().toString()

        });

        const checkUser =  await UserModel.findOne({"mobile":user_mobile});


        if(!checkUser){
            const userData = await user.save();

            if(userData){
    
                res.status(200).send({sucess:true,msg:'User Added Sucessfully',data:userData});
    
            }else{
                res.status(200).send({sucess:false,msg:'User Addition failed',data:userData});
    
    
            }


        }else{

            res.status(200).send({sucess:false,msg:'User Already Added'});


        }

        
        
    } catch (error) {

        res.status(400).send({sucess:false,msg:error.message});
        
    }

}


const login = async(req,res)=>{

    try {

        const user_mobile = req.body.mobile;


        const checkUser =  await UserModel.findOne({"mobile":user_mobile});


        if(checkUser){

            res.status(200).send({sucess:true,msg:'User Logged in Sucessfull'});

            


        }else{

            res.status(200).send({sucess:false,msg:'Invalid User~'});


        }

        
        
    } catch (error) {

        res.status(400).send({sucess:false,msg:error.message});
        
    }

}

module.exports = {
    register,
    login
}