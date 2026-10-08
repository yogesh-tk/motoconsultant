# Motora - Bike Consultant

React + Vite frontend-only bike consultant application with **Clerk authentication**, DummyJSON REST API, and real photo upload stored locally in the browser.

## Features

- Home, Bikes, Brandwise, Search, Filters
- Clerk Sign in / Sign up
- No Customer/Admin buttons in the login UI
- Customer and Admin role handling
- Customer and Admin can upload real bike photos
- Admin-only update and delete
- Customer-to-customer contact with Call and WhatsApp buttons
- Favourites
- My Upload Bikes
- Clerk UserButton + Account page
- Responsive professional UI
- No custom backend required
- No template literals in the main JS/JSX code

## 1. Install

Use Node.js 20.9+.

```bash
npm install
```

## 2. Create Clerk application

Create an application in the Clerk Dashboard:

https://dashboard.clerk.com/

Copy the **Publishable Key** from Clerk API Keys.

Create a `.env` file in the project root:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_CLERK_ADMIN_EMAILS=
```

Do not put a Clerk Secret Key in this React frontend.

## 3. Admin role

There is no Admin button in the UI.

Recommended method: in Clerk Dashboard, open the user you want to make admin and set their **public metadata** to:

```json
{
  "role": "admin"
}
```

Users without this metadata are treated as `customer`.

For a simple frontend demo, you can alternatively put one or more admin emails in:

```env
VITE_CLERK_ADMIN_EMAILS=admin@example.com
```

For production security, use server-side authorization instead of an email list in frontend environment variables.

## 4. Login

Open `/login`.

Clerk handles sign in and sign up. There is no separate Customer/Admin login button.

After login:

- Customer: upload, favourite, call and WhatsApp
- Admin: customer features + update/delete listings

## 5. Run

```bash
npm run dev
```

## 6. Real photo upload

The upload form uses a real `<input type="file">`. JPG, PNG, WEBP and other browser-supported image formats are accepted. The image is compressed in the browser and saved in local browser storage with the listing.

This means the photo remains after refresh on the same browser/device. It is not a shared cloud image.

For a production app where all users must see uploaded photos from every device, connect Cloudinary/Firebase/Supabase Storage plus a database/API.

## 7. API

The project uses DummyJSON motorcycle data and simulated product POST/PUT/DELETE endpoints. Uploaded listings and their real photos are kept locally because DummyJSON does not permanently store changes.

## Important security note

This is intentionally a frontend-only college/demo project. Clerk authenticates users, but true production-grade admin authorization must also be enforced on a trusted backend/API. Hiding the admin controls in React alone is not a security boundary.
