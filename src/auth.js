import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import Volunteer from "./models/volunteer";
import { compare } from "bcryptjs";

export const { handlers,signIn,signOut,auth }=NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialProvider({
            name: "Credentials",
            credentials:{
                email:{
                    label: "Email",
                    type: "email",
                },
                password:{
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async(credentials)=>{
                const email=credentials.email;
                const password=credentials.password;
                if(!email || !password) throw new CredentialsSignin("email is not valid");
                const volunteer= await Volunteer.findOne({email});
                if(!volunteer) throw new CredentialsSignin("invalid email or password");

                const isMatch= await compare(password,volunteer.password);

                if(!isMatch) throw new CredentialsSignin("password doesnt match");
                return volunteer;
            }
        })
    ],
    pages:{
        signIn: '/volunteer/signin',
    }
});