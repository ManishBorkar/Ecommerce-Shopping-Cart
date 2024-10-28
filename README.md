# Ecommerece shopping cart

A simple e-commerce shopping cart application featuring a searchable product list, category-based filtering, and a cart page with persistent state.

## Demo link
https://ecommerce-shopping-cart-fawn.vercel.app/

## Features
- **User Authentication** with Auth0
- **Product Listings** with search, filter, and sorting
- **Cart Management** using Zustand with persistent state
- **Notifications** with React-Toastify for user actions

---

## Getting Started

### Prerequisites
- **Node.js** and **npm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ecommerce-shpping-cart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add Environment Variables**:
   - Create a `.env.local` file in the root directory.
   - Add your Auth0 and API configurations:
     ```plaintext
     VITE_AUTH0_DOMAIN=your_auth0_domain
     VITE_AUTH0_CLIENT_ID=your_auth0_client_id
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS, Vite
- **State Management**: Zustand with persistence middleware
- **Data Fetching**: TanStack/React-Query
- **Authentication**: Auth0
- **Notifications**: React-Toastify

---

## Design Choices

1. **Responsive Design** with Tailwind CSS for optimal mobile and desktop experience.
2. **State Management with Persistence**: Zustand for lightweight, persistent global state.
3. **User Feedback**: Real-time notifications on key actions (e.g., adding/removing items from cart, authentication events).

---

## Libraries Used

### Core
- **React & TypeScript**: Core framework for a type-safe, scalable application.
- **Vite**: Fast bundling and development server.

### State Management
- **Zustand**: Simple and lightweight for managing the cart, with `persist` middleware for local storage persistence.
  
### Data Fetching
- **TanStack/React-Query**: Efficient data fetching, caching, and synchronization for product data.

### User Experience
- **React-Toastify**: Toast notifications for user actions.

### Authentication
- **Auth0**: User authentication and authorization handling.

---

## Project Structure

```
src
├── components          # Reusable components like Header, Footer, etc.
├── pages               # Main pages like ProductListPage and CartPage
├── store               # Zustand setup for cart management
├── api                 # API services for fetching data
└── main.tsx            # Entry point of the app
``````

---

## Screenshots

| **Product List**                     | **Cart Dropdown**                             |
|--------------------------------------|-----------------------------------------------|
| <img width="1512" alt="Screenshot 2024-10-28 at 10 55 06 AM" src="https://github.com/user-attachments/assets/ed76f480-e037-466a-83c2-2d7ea553ead4"> | <img width="1512" alt="Screenshot 2024-10-28 at 10 56 40 AM" src="https://github.com/user-attachments/assets/933c934e-778a-4112-b808-78d7f26bcb87">|


---
