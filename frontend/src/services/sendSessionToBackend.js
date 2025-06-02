import { supabase } from "./supabaseClient";

export async function sendSessionToBackend(device_id) {
  // Ambil session aktif dari Supabase
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    console.error("Gagal ambil session Supabase:", error);
    return false;
  }

  const access_token = session.access_token;

  // Kirim token + device_id ke backend
  const res = await fetch("http://localhost:4000/session", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      device_id: device_id // bisa 'rc01' atau dari localStorage/device select
    })
  });

  if (!res.ok) {
    console.error("Gagal kirim sesi ke backend");
    return false;
  }

  const result = await res.json();
  return result.success;
}
