import { supabase } from '@supabase/supabase-js';

const { auth } = supabase;

const handleRegister = async (email, password) => {
  const response = await auth.createUser({ email, password });
  if (response.error) {
    // Handle registration error
  } else {
    // Handle successful registration
  }
};