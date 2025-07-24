// src/services/sendRecordToBackend.js
export async function sendRecordToBackend(distance) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/record`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ distance }),
    });
    if (!res.ok) {
      console.error("[sendRecord] failed:", res.status, await res.text());
      return;
    }
    const body = await res.json();
    console.log("[sendRecord] success:", body);
  } catch (err) {
    console.error("[sendRecord] error:", err);
  }
}


export async function deleteRecordFromBackend() {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/record`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("[deleteRecord] failed:", res.status, await res.text());
      return;
    }
    const body = await res.json();
    console.log("[deleteRecord] success:", body);
  } catch (err) {
    console.error("[deleteRecord] error:", err);
  }
}