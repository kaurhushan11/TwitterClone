var nodemailer = require("nodemailer");

async function sendVarifyMail(to_email){

let transporter = nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:465,
    secure:false,
    auth:{
        user:"hushanpreet110703@gmail.com",
        pass:"cwvmozdxbeziwrcz"
    }
});

let info = await transporter.sendMail({
    to:to_email,
    from:"hushanpreet0637.be21@chitkara.edu.in",
    subject:"Verify email for twitter clone",
    html:"<h2 style=\"color:red\">Please click on link to varify email id</h2><a href=\"http://localhost:8081/varifyemail?email="+to_email+"\">Click here to varify</a>"
});

if(info.messageId)
    return true;
else
    return false;
}
module.exports=sendVarifyMail;