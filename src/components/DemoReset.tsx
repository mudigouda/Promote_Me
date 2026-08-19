"use client";
import { useState } from "react";

export default function DemoReset() {
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState("");
  async function reset(){
    if(!window.confirm("Reset all demo data? This removes the current demo business data and cannot be undone.")) return;
    setBusy(true); setMessage("");
    try {
      const r=await fetch("/api/demo/reset",{method:"POST"});
      const data=await r.json();
      setMessage(data.message||data.error||"Done");
    } catch { setMessage("Reset failed. Check the server and database connection."); }
    finally { setBusy(false); }
  }
  return <div className="settingCard" style={{alignItems:"center"}}><div><b>Demo data</b><p className="muted small">Clear the sample CRM, campaigns, deals and prospects. Run <code>npm run db:seed</code> afterward to restore the sample dataset.</p>{message&&<p className="small">{message}</p>}</div><button className="btn" disabled={busy} onClick={reset}>{busy?"Resetting…":"Reset demo data"}</button></div>;
}
