import { supabase } from './supabaseClient'

export async function getAccessToken() {
  const { data: { session }, error } = await supabase.auth.getSession()
  if (error || !session) return null
  return session.access_token
}
