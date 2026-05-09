# Ecommerce_App_02

## About
This is a full-stack e-commerce application with a React client and a Node/Express backend. It includes product browsing, cart management, checkout, order placement, address handling, authentication, file uploads, Stripe payments, Cloudinary image storage, and email support.

The frontend is a single-page app built with Vite and React, while the backend exposes REST APIs for products, cart, addresses, orders, users, and webhooks. The app is designed to support both customer shopping flows and owner/admin product management.

## Screenshots
Use the table below for a compact screenshot gallery.

<<<<<<< HEAD
<table>
	<tr>
		<td><img width="260" src="https://github.com/user-attachments/assets/c29af764-179f-46cb-8c3f-d83c4650a198" alt="Screenshot 1" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/4619eac6-bcb5-4f47-9a02-099f36463d85" alt="Screenshot 2" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/ba780680-3ad4-43d6-ada2-6ea2b96a600f" alt="Screenshot 3" /></td>
	</tr>
	<tr>
		<td><img width="260" src="https://github.com/user-attachments/assets/79275aa5-a8da-4c34-929a-e8151cd717c9" alt="Screenshot 4" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/ec99a4e0-3ce4-4138-a2ff-e94ffa3bd14c" alt="Screenshot 5" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/afdd0f67-bce8-4407-9138-755fa9b73a70" alt="Screenshot 6" /></td>
	</tr>
	<tr>
		<td><img width="260" src="https://github.com/user-attachments/assets/934bbf77-64a8-4594-aba8-9a1cae891b1a" alt="Screenshot 7" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/a2f83dc8-8e51-44b2-8b83-2f2f9d7846bf" alt="Screenshot 8" /></td>
		<td><img width="260" src="https://github.com/user-attachments/assets/6a2d492c-c721-44f0-aef6-3e7b452c0334" alt="Screenshot 9" /></td>
	</tr>
</table>
=======
<img width="1366" height="631" alt="image" src="https://github.com/user-attachments/assets/c29af764-179f-46cb-8c3f-d83c4650a198" />
<img width="1366" height="411" alt="image" src="https://github.com/user-attachments/assets/4619eac6-bcb5-4f47-9a02-099f36463d85" />
<img width="1366" height="506" alt="image" src="https://github.com/user-attachments/assets/ba780680-3ad4-43d6-ada2-6ea2b96a600f" />
<img width="1365" height="610" alt="image" src="https://github.com/user-attachments/assets/79275aa5-a8da-4c34-929a-e8151cd717c9" />
<img width="1365" height="643" alt="image" src="https://github.com/user-attachments/assets/ec99a4e0-3ce4-4138-a2ff-e94ffa3bd14c" />
<img width="1366" height="617" alt="image" src="https://github.com/user-attachments/assets/afdd0f67-bce8-4407-9138-755fa9b73a70" />
<img width="1359" height="616" alt="image" src="https://github.com/user-attachments/assets/934bbf77-64a8-4594-aba8-9a1cae891b1a" />
<img width="1366" height="689" alt="image" src="https://github.com/user-attachments/assets/a2f83dc8-8e51-44b2-8b83-2f2f9d7846bf" />
<img width="1351" height="597" alt="image" src="https://github.com/user-attachments/assets/6a2d492c-c721-44f0-aef6-3e7b452c0334" />
>>>>>>> 9c133e7984a12fa6283902367c5ced9efae96c7d

## Prerequisites
- Node.js 18 or newer
- MongoDB database connection string
- Clerk application keys
- Cloudinary account credentials
- Stripe secret key for payments
- SMTP credentials for outgoing emails

## Quick Start
1. Clone or open the project folder.
2. Install dependencies in both apps.
3. Create the `.env` files from the example files.
4. Start the server.
5. Start the client.
6. Open the frontend in the browser and test the cart or checkout flow.

## Features
- Browse products by collection and product details
- Add products to cart and update quantities
- Manage shipping addresses
- Choose between Cash on Delivery and Stripe payment
- Owner/admin product management views
- User authentication with Clerk
- Image upload and storage with Cloudinary
- Order creation and checkout flow
- Email notifications through Nodemailer

## Main Pages
- Home page with featured sections
- Collection page for browsing products
- Product details page for item information and size selection
- Cart and order summary page
- Address form for shipping details
- Orders page for viewing placed orders
- Owner dashboard for managing products

## Application Flow
1. A user signs in with Clerk.
2. Products are fetched from the backend.
3. The user adds items to the cart.
4. Shipping address is selected or created.
5. Checkout is completed with Cash on Delivery or Stripe.
6. The order is saved in MongoDB and the user is redirected to the result page.

## Tech Stack
- Frontend: React, Vite, React Router, Axios, Tailwind CSS, Swiper, React Hot Toast, Clerk React
- Backend: Node.js, Express, MongoDB, Mongoose, Clerk Express, Stripe, Cloudinary, Nodemailer, Multer, CORS
- Tools: ESLint, Nodemon, dotenv

## Project Structure
- `client/` React frontend built with Vite
- `server/` Express API for business logic and database access
- `client/src/components/` reusable UI components
- `client/src/pages/` application screens
- `server/controllers/` request handlers
- `server/models/` database schemas
- `server/routes/` API route definitions

## Folder Guide
- `client/src/context/` global app state and shared helpers
- `client/src/assets/` static data and media
- `server/config/` database, Cloudinary, and mail setup
- `server/middleware/` request protection and upload helpers
- `server/images/` uploaded image assets

## Backend API Overview
- `/api/products` product listing and product details
- `/api/cart` cart actions
- `/api/addresses` shipping address management
- `/api/orders` order placement and Stripe checkout flow
- `/api/user` user sync and profile-related data
- `/api/clerk` Clerk webhook handling
- `/api/stripe` Stripe webhook handling

## Setup
1. Install dependencies in both folders:
	```bash
	cd client
	npm install

	cd ../server
	npm install
	```
2. Create your environment files:
	- Copy `client/.env.example` to `client/.env`
	- Copy `server/.env.example` to `server/.env`
3. Fill in the required values for MongoDB, Clerk, Cloudinary, Stripe, SMTP, and the client URL.

## Environment Variables
### Client
- `VITE_BACKEND_URL` - Backend API base URL
- `VITE_CURRENCY` - Currency symbol used in prices
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk publishable key for authentication

### Server
- `PORT` - Server port
- `VERCEL` - Set to `1` when deployed on Vercel
- `CLIENT_URL` - Frontend URL used for Stripe redirects
- `MONGO_URL` - MongoDB connection string
- `CLDN_NAME`, `CLDN_API_KEY`, `CLDN_API_SECRET` - Cloudinary credentials
- `SMTP_SENDER_EMAIL`, `SMTP_PASS` - SMTP credentials for email delivery
- `CLERK_SECRET_KEY` - Clerk secret key for backend auth
- `STRIPE_SECRET_KEY` - Stripe secret key for payments

## Run the Project
1. Start the backend:
	```bash
	cd server
	npm run server
	```
2. Start the frontend in a second terminal:
	```bash
	cd client
	npm run dev
	```
3. Open the client URL shown by Vite, usually `http://localhost:5173`.

## Environment File Example
Create these files before running the app:

- `client/.env`
- `server/.env`

The example files already added to the repo can be copied and edited with your real values.

## Common Development URLs
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- Live Demo: [https://fronend-onugxcbny-kalharas-projects-265c6636.vercel.app/collection](https://fronend-eta.vercel.app/)

## Useful Scripts
- Client: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`
- Server: `npm start`, `npm run server`

## Deployment Notes
- Frontend is deployed on Vercel and can use the live demo link above.
- Backend should run with the correct production environment variables set.
- If Stripe checkout redirect URLs fail, check `CLIENT_URL` on the server.
- If API calls fail from the client, verify `VITE_BACKEND_URL`.

## Authentication And Payments
- Clerk is used for user sign-in and identity.
- Stripe is used for online payment checkout.
- Cash on Delivery is available for users who do not want to pay online.
- The backend uses protected routes for authenticated actions such as cart and order operations.

## Data Storage
- MongoDB stores users, products, orders, addresses, and cart-related records.
- Cloudinary stores uploaded product images.
- Nodemailer sends order or notification emails through SMTP.

## Notes
- The backend expects the local `.env` file in `server/`.
- The frontend expects the local `.env` file in `client/`.
- If Stripe checkout or user sync fails, confirm the API base URL and Clerk keys are set correctly.

## Troubleshooting
- Make sure MongoDB is running or the Atlas connection string is valid.
- Confirm Clerk keys match the frontend and backend projects.
- Restart both client and server after changing environment variables.
- If images do not upload, check the Cloudinary credentials.
- If the frontend shows API connection errors, verify the backend is running on the configured port.
- If Stripe checkout fails, confirm the Stripe secret key and client URL are correct.
- If auth errors appear, recheck the Clerk publishable and secret keys.

<<<<<<< HEAD
=======

>>>>>>> 9c133e7984a12fa6283902367c5ced9efae96c7d

## License
This project is covered by the proprietary license in [LICENSE.md](LICENSE.md). The code is not licensed for public use, copying, modification, redistribution, or commercial use without explicit written permission from the author.
