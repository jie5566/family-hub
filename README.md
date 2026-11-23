# Family Hub

An e-ink family dashboard for an old Kindle Paperwhite, plus a phone page to update it.

- `kindle.html` – the Kindle screen (Family / Fridge tabs, ink painting when idle). Plain ES5, tables only, for the old Kindle browser.
- `app.html` – the phone page: fridge items, class schedules, drop-off / pick-up, settings. Add it to the home screen.
- `gallery/` – ink paintings for the idle screen. Add an image (portrait 1072×1448, grayscale works best) and list it in `gallery/list.js`.
- Data lives in Supabase (project `family-hub`). Every read and write goes through database functions that check the family key, so the key travels in the link: `kindle.html#k=KEY` and `app.html#k=KEY`. Keep those links private.
- Weather: Open-Meteo (Stockholm), no API key.
