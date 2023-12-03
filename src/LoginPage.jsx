
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { SignInWithOAuthCredentials } from '@supabase/supabase-js'

const supabase = createClient('https://ozvupwelqotiudtrymxk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96dnVwd2VscW90aXVkdHJ5bXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Mjc3NDEsImV4cCI6MjAxNTEwMzc0MX0.4mzq3iSIVo9Kd9ONOtif-vXEoHssSusBZ48D3Ndntio')

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }
  async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
      nonce: 'NONCE', // must be the same one as provided in data-nonce (if any)
    })
  }



  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}  />)
    
  }
  else {
    return (
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
}
