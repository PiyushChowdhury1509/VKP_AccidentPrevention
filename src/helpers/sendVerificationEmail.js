import { resend } from "@/lib/resend";
import verificationEmail from "../../email/verificationEmail";

export async function sendVerificationEmail(email,username,verifyCode){
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'VKP Verification Code',
            react: verificationEmail({username, otp:verifyCode}),
        })
        return {success: true, message: 'verification email sent successfully'}
    }
    catch(emailError){
        console.log("Error sending verification Email: ",emailError)
        return {success: false, message: 'failed to send verification email'}
    }
}