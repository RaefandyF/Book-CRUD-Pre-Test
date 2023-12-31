import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials({
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"example@example.com"
                },
                password:{
                    label:"Password",
                    type:"password",
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password) return null
                
                
            }

            
        })
    ]
}