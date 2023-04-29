import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    // google provider
    GoogleProvider({
      clientId:
        "509599822281-27n4itqkkpjon3v2kld7a2vukf2bfbn6.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXT_PUBLIC_SECRET,
});
