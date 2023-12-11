import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:5000/api/auth/admin/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (user.status == "success" && user?.isExist?.role == "admin") {
          return user.isExist;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, profile }) {
      await axios
        .post(
          `http://localhost:5000/api/auth/admin/login`,
          profile ?? { email: user?.email }
        )
        .then((response) => {
          user.id = response.data.isExist._id;
          user.firstName = response.data.isExist.firstName;
          user.lastName = response.data.isExist.lastName;
          user.email = response.data.isExist.email;
          user.avater = response.data.isExist.avater;
        });
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },
};

export default NextAuth(authOptions);
