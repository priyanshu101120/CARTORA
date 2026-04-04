import {supabase} from "../supabase/supabase";

const signup = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    console.error("Signup error:", error.message);

  } else {
    console.log("Signup successful:", data);
  }
}
const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    console.error("Login error:", error.message);

  } else {
    console.log("Login successful:", data);
  }
}
const logout = async () => {
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout error:", error.message);

  } else {
    console.log("Logout successful:", data);
  }

}
export { signup, login, logout };