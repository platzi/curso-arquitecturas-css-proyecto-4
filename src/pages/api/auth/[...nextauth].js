import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
import dbConnect from '../../../lib/dbConnect';

export const authOptions = {
  
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },

    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },

  providers: [

    CredentialsProvider({

      async authorize(credentials) {
        await  dbConnect()
        const user = await User.findOne({
          email: credentials.email,
        });
        //console.log(user)
        console.log(credentials.password)
        console.log(user.password)
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          console.log('success!')
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          };

        } else {
          throw new Error('Invalid email or password.');
        }
      },
    }),
  ],
}

export default NextAuth(authOptions);