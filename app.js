/* app.js - logic for Medical Assistant demo */

const storage = {
  get(key, fallback=null){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){return fallback} },
  set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }
};

function showUser(user){ const ui = document.getElementById('user-info'); const ad = document.getElementById('acct-details'); if(user){ ui.textContent = user.name || user.phone || 'Signed in'; ad.textContent = `Logged in: ${user.name || user.phone}`; } else { ui.textContent = 'Not signed in'; ad.textContent = 'No user'; } }
let currentUser = storage.get('ma_user', null); showUser(currentUser);

/* Login modal and flows */
const loginModal = document.getElementById('login-modal');
document.getElementById('open-login').addEventListener('click', ()=> loginModal.style.display='flex');
document.getElementById('open-login-2').addEventListener('click', ()=> loginModal.style.display='flex');
document.getElementById('close-login').addEventListener('click', ()=> loginModal.style.display='none');

let currentOtp = null, otpPhone = null;
document.getElementById('send-otp').addEventListener('click', ()=>{
  const phone = document.getElementById('phone-input').value.trim();
  if(!phone){ alert('Enter a phone number'); return; }
  otpPhone = phone;
  currentOtp = Math.floor(100000 + Math.random()*900000).toString();
  alert('Demo OTP (use to verify): ' + currentOtp);
  document.getElementById('otp-code').focus();
});

document.getElementById('verify-otp').addEventListener('click', ()=>{
  const code = document.getElementById('otp-code').value.trim();
  if(!currentOtp || code !== currentOtp){ alert('Invalid OTP'); return; }
  currentUser = { phone: otpPhone, name: 'User ' + (otpPhone.slice(-4)) };
  storage.set('ma_user', currentUser);
  showUser(currentUser);
  loginModal.style.display='none';
  currentOtp = null; otpPhone = null; alert('Signed in as ' + currentUser.name);
});

// Mock Google
document.getElementById('google-signin').addEventListener('click', ()=>{
  currentUser = { name: 'Google User', email: 'user@example.com' };
  storage.set('ma_user', currentUser);
  showUser(currentUser);
  loginModal.style.display='none';
  alert('Signed in (demo) as ' + currentUser.name + '. To enable real Google OAuth, create an OAuth client and follow Google docs.');
});

/* Symptom rules */
const symptomRules = [
  { condition: "Common Cold / Allergy", keywords:["runny","nasal","sneeze","sneezing","itchy","congestion","sore throat","cough","mild"], description:"Often viral or allergic", advice:"Rest & hydration; consult physician if worsening" },
  { condition: "Flu", keywords:["fever","chills","muscle","aches","fatigue","headache","high fever"], description:"Flu may cause high fever & body aches", advice:"Consider medical care if severe" },
  { condition: "Migraine", keywords:["headache","nausea","vomit","sensitivity","aura","throbbing"], description:"Intense unilateral headache", advice:"Avoid triggers; seek care for sudden severe onset" },
  { condition: "Gastroenteritis", keywords:["diarrhea","vomit","nausea","stomach","cramp"], description:"Stomach bug; keep hydrated", advice:"See doctor if dehydration or blood in stool" },
  { condition: "Strep throat", keywords:["sore throat","fever","tonsils","swollen","white patches"], description:"Bacterial infection sometimes", advice:"Seek testing and antibiotics if confirmed" }
];

function tokenize(text){ return text.toLowerCase().replace(/[^\w\s]/g,' ').split(/\s+/).filter(Boolean); }
function checkSymptoms(text){ const tokens = tokenize(text); if(!tokens.length) return []; const res = []; symptomRules.forEach(rule=>{ let matches=0; rule.keywords.forEach(k=>{ if(tokens.some(t=>t.includes(k) || k.includes(t))) matches++; }); if(matches>0) res.push({ ...rule, score: Math.round(matches / rule.keywords.length * 100) }); }); return res.sort((a,b)=>b.score-a.score); }

document.getElementById('check-btn').addEventListener('click', ()=>{
  const text = document.getElementById('symptoms-input').value.trim(); const out = document.getElementById('symptom-results'); out.innerHTML=''; if(!text){ out.innerHTML='<div class="muted">Please enter symptoms.</div>'; return; } const res = checkSymptoms(text); if(!res.length){ out.innerHTML='<div class="muted">No close matches. Consider more detail or consult a clinician.</div>'; return; } res.slice(0,6).forEach(r=>{ const d = document.createElement('div'); d.className='result-item'; d.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${r.condition}</strong><div class="muted">${r.description}</div></div><div style="text-align:right;color:var(--accent);font-weight:700">${r.score}%</div></div><div class="muted" style="margin-top:8px"><strong>Advice:</strong> ${r.advice}</div>`; out.appendChild(d); });
});
document.getElementById('clear-btn').addEventListener('click', ()=>{ document.getElementById('symptoms-input').value=''; document.getElementById('symptom-results').innerHTML=''; });

/* Medicines: sample and OpenFDA */
async function searchMedicinesOnline(query){
  const encoded = encodeURIComponent(query);
  const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${encoded}+OR+openfda.generic_name:${encoded}&limit=12`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('API error ' + res.status);
  const data = await res.json();
  const items = (data.results||[]).map(r=>{
    const of = r.openfda || {}; const name = (of.brand_name || of.generic_name || ['Unknown'])[0];
    const uses = (r.indications_and_usage && r.indications_and_usage[0]) || of.pharm_class || r.description || 'See label';
    const dosage = (r.dosage_and_administration && r.dosage_and_administration[0]) || 'See label';
    return { name, uses: (typeof uses==='string') ? uses.slice(0,220) : 'See label', dosage: (typeof dosage==='string') ? dosage.slice(0,200) : 'See label' };
  });
  return items;
}

const medListEl = document.getElementById('med-list');
const medSearchInput = document.getElementById('med-search');
let sampleMedicines = [];

async function loadSampleMedicines(){
  try{ const r = await fetch('/data/medicines.json'); sampleMedicines = await r.json(); }catch(e){ sampleMedicines = [ { name:"Paracetamol", uses:"Fever, pain", dosage:"500-1000mg every 4-6h (max 4g/day adult)" } ]; }
}

function attachMedButtons(){ medListEl.querySelectorAll('.view-btn').forEach(b=>{ b.addEventListener('click', ()=>{ const nm = b.dataset.name; const uses = decodeURIComponent(b.dataset.uses || '') || 'See label'; const dosage = decodeURIComponent(b.dataset.dosage || '') || 'See label'; alert(`${nm}\n\nUses: ${uses}\n\nDosage: ${dosage}\n\nAlways follow the label and health professional guidance.`); }); }); }

async function performMedSearch(q){ medListEl.innerHTML = '<div class="muted small">Searching...</div>'; if(!q) { medListEl.innerHTML = ''; sampleMedicines.forEach(m=>{ const el = document.createElement('div'); el.className='med-item'; el.innerHTML = `<div><strong>${m.name}</strong><div class="muted small">${m.uses}</div></div><button class="ghost small view-btn" data-name="${encodeURIComponent(m.name)}" data-uses="${encodeURIComponent(m.uses)}" data-dosage="${encodeURIComponent(m.dosage||'')}">View</button>`; medListEl.appendChild(el); }); attachMedButtons(); return; }
  try{
    const online = await searchMedicinesOnline(q);
    if(online.length){ medListEl.innerHTML=''; online.forEach(m=>{ const el = document.createElement('div'); el.className='med-item'; el.innerHTML = `<div><strong>${m.name}</strong><div class="muted small">${m.uses}</div></div><button class="ghost small view-btn" data-name="${encodeURIComponent(m.name)}" data-uses="${encodeURIComponent(m.uses)}" data-dosage="${encodeURIComponent(m.dosage)}">View</button>`; medListEl.appendChild(el); }); attachMedButtons(); return; } else { medListEl.innerHTML = '<div class="muted">No medicines found online — showing fallback list.</div>'; }
  }catch(e){ medListEl.innerHTML = '<div class="muted">Online search failed or rate-limited — showing fallback list.</div>'; }
  sampleMedicines.forEach(m=>{ const el = document.createElement('div'); el.className='med-item'; el.innerHTML = `<div><strong>${m.name}</strong><div class="muted small">${m.uses}</div></div><button class="ghost small view-btn" data-name="${encodeURIComponent(m.name)}" data-uses="${encodeURIComponent(m.uses)}" data-dosage="${encodeURIComponent(m.dosage||'')}">View</button>`; medListEl.appendChild(el); }); attachMedButtons(); }

document.getElementById('med-search-btn').addEventListener('click', ()=> performMedSearch(medSearchInput.value.trim()));
document.getElementById('med-refresh').addEventListener('click', ()=> performMedSearch(medSearchInput.value.trim()));

/* Map and hospitals */
let map, markers = [];
async function loadHospitals(){ try{ const r = await fetch('/data/hospitals.json'); return await r.json(); }catch(e){ return [ { name:"City General Hospital", address:"45 Main St", city:"Midtown", lat:37.7749, lng:-122.4194, phone:"(555)111-2222" } ]; } }
let hospitals = [];
function initMap(){ try{ map = L.map('map', { attributionControl:false }).setView([37.7749, -122.4194], 12); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19 }).addTo(map); hospitals.forEach(h=>{ const m = L.marker([h.lat,h.lng]).addTo(map).bindPopup(`<strong>${h.name}</strong><div class="muted">${h.address}, ${h.city}<br/>${h.phone}</div>`); markers.push(m); }); }catch(e){ document.getElementById('map').innerHTML = '<div class="muted small">Map failed to load.</div>'; console.warn(e); } }

function renderHospitalList(filter=''){ const el = document.getElementById('hospital-list'); el.innerHTML=''; const q = (filter||'').toLowerCase(); const list = hospitals.filter(h=> !q || h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q)); if(!list.length){ el.innerHTML = '<div class="muted small">No hospitals found</div>'; return; } list.forEach(h=>{ const div = document.createElement('div'); div.className='muted small'; div.innerHTML = `<strong>${h.name}</strong> — ${h.address}, ${h.city} (${h.phone})`; el.appendChild(div); }); }

document.getElementById('locate-btn').addEventListener('click', ()=>{ if(!navigator.geolocation){ alert('Geolocation not available'); return; } navigator.geolocation.getCurrentPosition(pos=>{ const lat = pos.coords.latitude, lng = pos.coords.longitude; if(map) map.setView([lat,lng],13); const nearest = hospitals.map(h=> ({...h, dist: haversine(lat,lng,h.lat,h.lng)})).sort((a,b)=>a.dist-b.dist).slice(0,3); const el = document.getElementById('hospital-list'); el.innerHTML = '<div class="muted small" style="font-weight:600">Nearest hospitals</div>'; nearest.forEach(n=>{ const dkm = n.dist.toFixed(1); const div = document.createElement('div'); div.className='muted small'; div.innerHTML = `<strong>${n.name}</strong> — ${n.address} (${dkm} km)`; el.appendChild(div); }); }, err=> alert('Location error: ' + err.message), { timeout:10000 }); });

function haversine(lat1,lon1,lat2,lon2){ const R = 6371; const toRad = v => v*Math.PI/180; const dLat = toRad(lat2-lat1); const dLon = toRad(lon2-lon1); const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2; const c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); return R*c; }

/* Reminders */
let reminders = storage.get('ma_reminders', []);
const reminderListEl = document.getElementById('reminder-list');
function renderReminders(){ reminderListEl.innerHTML=''; if(!reminders.length){ reminderListEl.innerHTML = '<div class="muted small">No reminders yet</div>'; return; } reminders.forEach((r,i)=>{ const div = document.createElement('div'); div.className='reminder-item'; div.innerHTML = `<div><strong>${r.name}</strong><div class="muted small">${r.dose} • ${r.time}</div></div><div><button class="ghost small" data-i="${i}">Delete</button></div>`; reminderListEl.appendChild(div); }); reminderListEl.querySelectorAll('button[data-i]').forEach(b=>{ b.addEventListener('click', ()=>{ const idx = +b.dataset.i; reminders.splice(idx,1); storage.set('ma_reminders', reminders); renderReminders(); }); }); }

document.getElementById('add-reminder-btn').addEventListener('click', ()=>{ const name = prompt('Medicine name (e.g., Paracetamol)'); if(!name) return; const dose = prompt('Dose (e.g., 500mg)'); if(dose===null) return; const time = prompt('Time (HH:MM 24h) e.g., 18:30'); if(!time) return; reminders.push({ name, dose, time, id: Date.now() }); storage.set('ma_reminders', reminders); renderReminders(); alert('Reminder added. Keep the page open for notifications.'); });

function checkReminders(){ const now = new Date(); const hhmm = now.toTimeString().slice(0,5); reminders.forEach(r=>{ if(r._lastFired === hhmm) return; if(r.time === hhmm){ r._lastFired = hhmm; notify(`Medicine: ${r.name}`, `Time to take ${r.dose}`); } }); }

function notify(title, body){ if(Notification.permission === 'granted'){ new Notification(title, { body }); } else if(Notification.permission !== 'denied'){ Notification.requestPermission().then(p => { if(p==='granted') new Notification(title, { body }); else alert(`${title}\n\n${body}`); }); } else { alert(`${title}\n\n${body}`); } }
setInterval(checkReminders, 30*1000);
renderReminders();

/* Chat & OpenAI */
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const openaiKeyInput = document.getElementById('openai-key');
openaiKeyInput.value = storage.get('ma_openai_key', '') || '';

document.getElementById('save-key').addEventListener('click', ()=>{ storage.set('ma_openai_key', openaiKeyInput.value.trim()); alert('API key saved to localStorage for demo. For production, use server-side proxy.'); });

function appendChat(msg, from='assistant'){ const d = document.createElement('div'); d.className = 'message ' + (from==='user' ? 'from-user' : 'from-assistant'); d.innerText = msg; chatWindow.appendChild(d); chatWindow.scrollTop = chatWindow.scrollHeight; }

async function sendChatMessage(text){ appendChat(text, 'user'); const key = storage.get('ma_openai_key', '') || ''; appendChat('Thinking...', 'assistant'); if(key){ try{ const res = await fetch('https://api.openai.com/v1/chat/completions', { method:'POST', headers:{ 'Content-Type':'application/json', 'Authorization': 'Bearer ' + key }, body: JSON.stringify({ model:'gpt-3.5-turbo', messages:[ {role:'user', content:text} ], max_tokens:400 }) }); if(!res.ok) throw new Error('OpenAI error ' + res.status); const data = await res.json(); const reply = data.choices?.[0]?.message?.content?.trim() || 'No response'; const last = chatWindow.querySelectorAll('.message.from-assistant'); if(last.length) last[last.length-1].remove(); appendChat(reply, 'assistant'); }catch(e){ console.warn(e); const last = chatWindow.querySelectorAll('.message.from-assistant'); if(last.length) last[last.length-1].remove(); appendChat('Online chat failed, showing a helpful suggestion instead.', 'assistant'); appendChat(mockAssistant(text), 'assistant'); } } else { const last = chatWindow.querySelectorAll('.message.from-assistant'); if(last.length) last[last.length-1].remove(); appendChat(mockAssistant(text), 'assistant'); } }

function mockAssistant(text){ text = text.toLowerCase(); if(text.includes('fever') || text.includes('temperature')) return 'If you have fever, monitor temperature, rest, stay hydrated. Use paracetamol as directed. If fever >39°C or persistent, consult a doctor.'; if(text.includes('paracetamol') || text.includes('acetaminophen')) return 'Paracetamol is commonly used for fever and pain. Typical adult dosing is 500–1000mg every 4–6 hours, up to 4g/day. Avoid overdose and alcohol.'; if(text.includes('remind') || text.includes('reminder')) return 'You can add reminders in the Reminders panel — click + New and provide medicine, dose, and time.'; return 'I can help with symptom checks, medicine info, and reminders. Try: "What to do for fever?" or "Remind me to take paracetamol at 18:30".' }

document.getElementById('chat-send').addEventListener('click', ()=> { const v = chatInput.value.trim(); if(!v) return; chatInput.value=''; sendChatMessage(v); });
chatInput.addEventListener('keydown', e=> { if(e.key==='Enter') { e.preventDefault(); document.getElementById('chat-send').click(); } });
document.getElementById('clear-chat').addEventListener('click', ()=>{ chatWindow.innerHTML=''; });

/* Startup */
window.addEventListener('load', async ()=>{
  try{ sampleMedicines = []; await loadSampleMedicines(); await (async ()=>{ hospitals = await loadHospitals(); })(); initMap(); renderHospitalList(); }catch(e){ console.warn(e); }
  if(Notification && Notification.permission==='default'){ setTimeout(()=>{ Notification.requestPermission().then(()=>{}); }, 1500); }
});

// med search enter
medSearchInput.addEventListener('keydown', e=> { if(e.key==='Enter') performMedSearch(e.target.value.trim()); });
