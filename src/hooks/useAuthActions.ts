import { useState } from "react";
import { signUp, signIn, signOut, resetPassword, getAuthErrorMessage } from "../services/authServices";

export const useAuthActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const clearMessages = () => { setError(null); setSuccess(null); };

  const handleSignUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    clearMessages();
    try {
      await signUp(name, email, password);
    } catch (err: any) {
      setError(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    clearMessages();
    try {
      await signIn(email, password);
    } catch (err: any) {
      setError(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (err: any) {
      setError(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (email: string) => {
    setLoading(true);
    clearMessages();
    try {
      await resetPassword(email);
      setSuccess("Password reset email sent. Check your inbox.");
    } catch (err: any) {
      setError(getAuthErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading, error, success,
    handleSignUp, handleSignIn, handleSignOut, handleResetPassword,
    clearMessages,
  };
};