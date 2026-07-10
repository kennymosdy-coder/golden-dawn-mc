# Golden Dawn MC Website — Starter Build

This is a responsive first version of the Golden Dawn MC website.

## What is included

- Home / hero
- Club identity and founding information
- Timeline / history
- Editable roster
- Recruitment section
- Gallery
- Paper-cutout/cardboard visual system
- Mobile layout and menu
- Your recruitment poster and patch included as site assets

## Preview it

Open `index.html` in a browser.

For a cleaner local preview, run this command inside the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## How you edit it

The easiest content edits are in `content.js`.

That file contains:
- About text
- History entries
- Roster names and ranks

Images are in the `assets` folder. Replace an image while keeping the same filename, or update the image path in `index.html`.

## How only YOU can change the public website

A public visitor cannot edit a static website. They only receive the finished files.

The person who can publish changes is whoever controls the hosting account and source files. Use this setup:

1. Create your own private GitHub repository.
2. Upload this folder.
3. Connect the private repository to Netlify, Cloudflare Pages, or Vercel.
4. Turn on two-factor authentication for both accounts.
5. Do not share your GitHub/hosting password.
6. Keep yourself as the only repository collaborator and site owner.

Visitors can view the site but cannot publish changes because they do not have access to the private repository or hosting dashboard.

## Important security truth

A hidden `/admin` page by itself is NOT protection. A real online admin dashboard needs:

- Secure sign-in
- A database
- Server-side permission checks
- A private owner account
- Two-factor authentication

A future version can use Supabase or Firebase so you can sign in and edit content through a dashboard. Never place an admin password directly inside browser JavaScript; visitors could inspect it.

## Suggested next build

- Real recruitment form
- Password-protected owner dashboard
- Editable gallery uploads
- Club announcements
- Member profiles
- Discord button
- Custom domain
