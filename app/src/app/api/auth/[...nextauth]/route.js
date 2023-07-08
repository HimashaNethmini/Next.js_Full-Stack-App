import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//can provide any authentication provider
const handler = NextAuth({
    providers: [
        //using google cloud function to do it
        GoogleProvider({
            //client id & secret is hidden in the .env file
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
    ],
})

// a random secret key is typed in .env file
export {handler as GET, handler as POST};
