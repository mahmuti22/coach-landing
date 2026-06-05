# Formspree einrichten — Bewerbungsformular Most Wanted Physique Coaching

Diese Anleitung erklärt, wie Elvis und Ardit Formspree für das Bewerbungsformular auf der Website einrichten.  
Nach dem Setup sendet ihr **nur den Formspree-Endpoint** (eine URL) an Irfan — er trägt ihn in die Website ein.

---

## Was Formspree macht

Wenn jemand auf der Website auf **„Jetzt bewerben“** klickt, schickt Formspree die Formulardaten automatisch per E-Mail an eure Adresse.  
Ihr braucht **kein Backend**, **kein Google Drive** und **kein Zapier**.

---

## Schritt 1 — Account erstellen

1. Geht auf **[https://formspree.io](https://formspree.io)**
2. Klickt auf **Sign Up** und registriert euch (E-Mail + Passwort, oder Login mit Google)
3. Bestätigt die Registrierungs-E-Mail, falls Formspree danach fragt

> **Tipp:** Ein gemeinsamer Account für Most Wanted (z. B. mit `info@mwp.ch`) ist sinnvoll, damit beide Coaches Zugriff haben.

---

## Schritt 2 — Neues Formular anlegen

1. Nach dem Login: **+ New Form** (oder **Create Form**)
2. **Form Name** (intern, nur für euch sichtbar), z. B.:  
   `Most Wanted — Bewerbung Website`
3. Bestätigt / erstellt das Formular

---

## Schritt 3 — Ziel-E-Mail festlegen

1. Öffnet die **Form Settings** (Zahnrad / Settings beim Formular)
2. Unter **Email Notifications** (oder **Send submissions to**):
   - Tragt ein: **`info@mwp.ch`**
3. Speichert die Einstellungen

Alle Bewerbungen von der Website landen dann in diesem Postfach.

---

## Schritt 4 — Endpoint kopieren

Jedes Formular hat eine **eindeutige URL** — das ist der **Endpoint**.

1. In der Formspree-Übersicht oder unter **Integration** / **Endpoint** findet ihr etwas wie:

   ```
   https://formspree.io/f/xxxxxxxx
   ```

   oder

   ```
   https://formspree.io/f/abcxyzde
   ```

2. **Kopiert die komplette URL** (alles von `https://` bis zum Ende)

3. Sendet sie an **Irfan Mahmuti** per E-Mail oder WhatsApp, z. B.:

   > Formspree Endpoint für die Website:  
   > `https://formspree.io/f/xxxxxxxx`

Irfan trägt diese URL in die Website ein. Danach funktioniert das Formular über Formspree.

---

## Schritt 5 — Erste Test-Bewerbung (wichtig)

1. Öffnet die **Live-Website** (nachdem Irfan den Endpoint eingetragen hat)
2. Füllt das Bewerbungsformular mit Testdaten aus und sendet ab
3. Prüft **`info@mwp.ch`** — die E-Mail sollte innerhalb weniger Minuten ankommen

**Hinweis:** Beim allerersten Submit kann Formspree eine **Bestätigungs-E-Mail** an die Absender-Adresse schicken (Spam-Schutz). Das ist normal.

---

## Welche Felder kommen in der E-Mail an?

Das Formular auf der Website sendet folgende Daten:

| Feld in der E-Mail | Inhalt |
| --- | --- |
| **Vorname** | Vorname des Bewerbers |
| **Nachname** | Nachname des Bewerbers |
| **email** | E-Mail des Bewerbers (Antworten geht direkt an den Bewerber) |
| **Telefon** | Telefonnummer (optional, kann leer sein) |
| **Coach** | Gewählter Coach: *Elvis Krasniqi*, *Ardit Percuku* oder *Mir ist egal* |
| **Nachricht** | Nachricht / Ziel des Bewerbers |

---

## Empfohlene Einstellungen in Formspree (optional)

Unter **Settings** könnt ihr zusätzlich prüfen:

| Einstellung | Empfehlung |
| --- | --- |
| **Spam filtering** | Aktiviert lassen (Standard) |
| **reCAPTCHA** | Bei viel Spam aktivieren |
| **Autoresponder** | Optional: automatische Bestätigung an den Bewerber („Wir melden uns in 48h“) |
| **Redirect after submit** | **Nicht nötig** — die Website zeigt bereits eine Erfolgsmeldung |

---

## Checkliste — Kurzfassung

- [ ] Formspree-Account erstellt  
- [ ] Neues Formular angelegt  
- [ ] Ziel-E-Mail: **`info@mwp.ch`**  
- [ ] Endpoint-URL kopiert  
- [ ] Endpoint an **Irfan Mahmuti** gesendet  
- [ ] Nach Eintrag durch Irfan: Test-Bewerbung gesendet  
- [ ] E-Mail in **`info@mwp.ch`** erhalten  

---

## Häufige Fragen

**Muss jeder Coach einen eigenen Formspree-Account haben?**  
Nein. Ein Account und ein Formular reichen. Alle Bewerbungen gehen an `info@mwp.ch`.

**Was passiert, wenn wir den Endpoint verlieren?**  
In Formspree unter dem Formular → **Integration** / **Endpoint** — die URL steht dort jederzeit.

**Kostet Formspree etwas?**  
Es gibt einen **kostenlosen Plan** (begrenzte Submissions pro Monat). Für den Start reicht das in der Regel. Details: [formspree.io/plans](https://formspree.io/plans)

**Was, wenn keine E-Mail ankommt?**  
1. Spam-Ordner prüfen  
2. Prüfen, ob `info@mwp.ch` in den Formspree-Settings stimmt  
3. Irfan fragen, ob der Endpoint korrekt in der Website eingetragen ist  

---

## Kontakt für technische Fragen

**Website / Formular-Integration:**  
Irfan Mahmuti — [irfan.mahmuti@hotmail.com](mailto:irfan.mahmuti@hotmail.com)
