# Managing your NE Post & Polish website

Your site is just two text files. There is nothing to compile and nothing
to install. Edit a file, save it, and the live site updates within a minute
or two.

## The files

- `index.html` — all the words and photos on the site
- `styles.css` — colors, fonts, and layout
- `images/` — your logo and photos

## How to edit (on your phone, in the GitHub app)

1. Open the GitHub app and go to `habitatconcepts / NE-Post-Polish-static`.
2. Tap `index.html`.
3. Tap the pencil icon (top right) to edit.
4. Find the text you want to change. Lines marked `<!-- EDIT: ... -->`
   tell you exactly what each section is.
5. Make your change, scroll down, tap **Commit changes**.

That is it. The site rebuilds itself.

## Common edits

- **Change a headline or paragraph:** edit the words between the tags,
  e.g. `<h1>Your words here</h1>`. Do not delete the `<h1>` or `</h1>`.
- **Change the phone number:** search for `696-6857` and replace every
  match, including the `tel:+14016966857` links.
- **Change the email:** search for `Nepostandpolish@gmail.com`.
- **Swap a photo:** upload your new photo into `images/` (tap `Add file`
  in the GitHub app), then in `index.html` replace the old file name
  with the new one, e.g. `images/my-new-photo.jpg`.
- **Change a color:** open `styles.css` and edit the color codes at the
  top under `:root` (e.g. `--gold: #c2a15f`). One change updates the
  whole site.
- **Add a town to the service area:** find the
  `<!-- EDIT: service area -->` line in `index.html` and edit the
  sentence below it.

## Rules that keep the site working

- Never delete anything inside `<...>` brackets — only change the words
  between them.
- Photo file names are case-sensitive: `Photo.jpg` and `photo.jpg`
  are different files.
- If the site ever looks broken after an edit, tell Phoenix what you
  changed and it can be undone in seconds.
