import LoginForm from "@/src/components/forms/LoginForm";
import { signInWithProvider } from "@/src/actions/actions";

export default function Login () {
  return (
    <div>
      <LoginForm signIn={signInWithProvider} />
    </div>
  );
}