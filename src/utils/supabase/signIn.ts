import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "./client";

const client: SupabaseClient = createClient();

export const handleGoogleSignIn: () => Promise<void> = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.origin + "/auth/callback?from=google",
      },
    });
  } catch (error) {
    console.error("Google login failed: ", error);
  }
};

export const handleKakaoSignIn: () => Promise<void> = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: window.origin + "/auth/callback?from=kakao",
      },
    });
  } catch (error) {
    console.error("Kakao signIn failed: ", error);
  }
};
