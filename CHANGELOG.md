# Jurnal de modificări — Inforenergetica

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
