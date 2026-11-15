# Jurnal de modificări — Inforenergetica

## 2.1.1 — 2026-11-15

- Nou: butoane de distribuire pe rețele sociale (vertical, pe marginea din stânga; fără scripturi externe, doar linkuri deschise la clic); bara de zoom cu lupă și „potrivire ecran” revine pe marginea din dreapta, centrată pe verticală; corectat afișarea suprapusă la zoom mare (panourile cu înălțimi în vh/vw nu mai ies din ecran).

## 2.1.0 — 2026-11-15

- Nou: accesibilitate pe toate ecranele — butonul „Aa” (mărimea textului, contrast ridicat, fără animații, text lizibil, linkuri subliniate, citire cu voce), săgeata „Înapoi sus” și „Sari la conținut”; fereastra se potrivește mereu ecranului; zoom-ul cu lupă și „potrivire ecran” stau acum pe marginea din stânga (fff-kit 1.6.0).

## 2.0.9 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

## 2.0.2 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.0.2 — 2026-10-27 (anterior: 2.0.1)

Doar text (surse).

- Nota „Ce spun dovezile” (`ev_html`, 8 limbi): DOI Jain & Mills 2010 (confirmat) și o sursă nouă, pagina Memorial Sloan Kettering „BioResonance Therapy” (practică înrudită; pagina a fost citită), citată exact și etichetată ca practică înrudită în fiecare limbă.
- Test nou `tests/surse.test.mjs` (static).

Nu implementat:

- Inforenergetica ca atare: nicio meta-analiză/recenzie/studiu controlat găsit; rămâne „sursă de completat”.
- Volum/pagini Jain & Mills 17(1):1-16: neconfirmate.

## 2.0.1 — 2026-10-27 (anterior: 2.0.0)

Doar text (surse).

- Notă nouă „Ce spun dovezile” (`ev_html`, 8 limbi) sub avertismentul permanent; „sursă de completat” pentru inforenergetică; Jain & Mills 2010 ca practică înrudită.
- README: „Stare” (studiu descriptiv) și „Offline”.

Nu implementat:

- Studii/recenzii despre inforenergetică ca atare: nu s-au găsit; marcat „sursă de completat” (nu am inventat citări).
- Pagina MSK despre bioresonanță: neutilizată, deoarece nu am putut confirma conținutul ei.

Istoricul anterior (1.x–2.0.0) este în secțiunea „History” din README.md.
