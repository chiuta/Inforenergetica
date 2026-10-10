# Inforenergetica — curs interactiv

Curs educațional offline, într-un singur fișier HTML, despre inforenergetică (13 grade + nivelul IOS), cu analiză SWOT/TOWS, glosar și autoevaluare.

**Live:** https://chiuta.github.io/Inforenergetica/

![Captura de ecran](screenshot.png)

## Avertisment

Inforenergetica este o practică neconvențională, **fără validare științifică**: mecanismele descrise nu au fost confirmate prin studii controlate, iar comunitatea științifică o consideră pseudoștiință. Aplicația descrie o tradiție, în scop educativ și cultural. **Nu este sfat medical, diagnostic sau tratament** și nu înlocuiește medicul. Nu amâna și nu întrerupe un tratament prescris. Același avertisment este afișat permanent în aplicație, pe fiecare secțiune.

## Ce este

O sinteză educațională în limba română, structurată pe 13 grade succesive și nivelul „suprem” IOS, care urmează structura unei școli de profil din România (atribuire istorică prezentată în aplicație, neverificată independent aici). Aplicația declară că nu reprezintă materialul oficial al vreunei școli.

## Funcții

Verificate în cod și în browser:
- Navigare pe secțiuni: Acasă, Istoric și context, Analiză SWOT / TOWS, Concepte fundamentale, Gradele I–XIII, IOS, Jurnal personal, Test de calibrare, Glosar, Autoevaluare, Resurse.
- Analiza SWOT și matricea TOWS a domeniului (8 carduri: 4 SWOT + 4 strategii TOWS).
- Test de calibrare: patru poziții, una aleasă la întâmplare la fiecare rundă (generator `crypto.getRandomValues`, cu rezervă `Math.random`); afișează runde, nimeriri și abaterea tipică așteptată din hazard. Nu măsoară nicio energie sau abilitate.
- Căutare în tot cursul și în glosar, cu ignorarea diacriticelor.
- Autoevaluare cu 12 întrebări.
- Jurnal personal (descărcare .txt, copiere în clipboard, golire).
- Temă deschisă/închisă, citire cu voce tare (sinteza vocală a browserului), ecran activ (Wake Lock), ecran complet, printare / export PDF a întregului curs.

## Manual de utilizare

1. Deschide pagina și citește avertismentul din partea de sus.
2. Alege o secțiune din meniul din stânga (pe mobil: butonul ☰; Escape îl închide).
3. Parcurge gradele în ordine sau caută un termen în „Caută în tot cursul”.
4. În „Test de calibrare” apasă o poziție; rezultatul este pur statistic, ~25% pe termen lung.
5. În „Jurnal personal” scrie însemnări și apasă „Descarcă jurnalul” înainte de a închide pagina.
6. „Autoevaluare” verifică doar înțelegerea materialului de curs.
7. Butonul de imprimantă deschide dialogul de printare pentru tot cursul.

## Confidențialitate și rețea

- Storage: aplicația nu folosește `localStorage`, `sessionStorage`, IndexedDB sau cookie-uri. Jurnalul și progresul există doar în pagina deschisă și se pierd la închidere/reîncărcare; jurnalul se păstrează numai dacă îl descarci.
- Rețea: nu am găsit niciun `fetch`, script, font, imagine sau link extern în cod; nu există gazde externe. Politica CSP din pagină blochează orice conexiune externă.
- Permisiuni: niciuna cerută de aplicație. Opțional, la apăsarea butoanelor: sinteză vocală, Wake Lock, ecran complet, clipboard, vibrații (la dispozitive care le au), partajare nativă (butonul „Distribuie rezultatul”, doar dacă browserul o oferă).
- Zero telemetrie, fără cont.

## Limite și avertismente

- Conținutul prezintă afirmațiile tradiției așa cum sunt formulate de aceasta; nu sunt dovedite științific.
- „Puterea inforenergetică”, „diagnosticul” și „teledeterminarea” nu sunt măsurători fizice.
- Referirile istorice la persoane și organizații din secțiunea „Istoric și context” provin din text și nu au fost verificate independent.
- Progresul („X / 14 grade”) arată doar secțiunile deschise în sesiunea curentă.

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; nu are nevoie de internet sau de server.

## Licență

Licența nu este încă declarată.

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf

## English summary

Inforenergetica is a single-file, offline, Romanian-language educational course on "inforenergetics", a non-conventional practice with no scientific validation (considered pseudoscience by the scientific community). It includes 13 grades plus a top level, a SWOT/TOWS analysis, glossary, a quiz and a chance-based "calibration" game that measures nothing. A permanent disclaimer states it is not medical advice. No storage, no external requests, no telemetry.
