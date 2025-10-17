#  Frontend Pricing & Checkout Flow

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.18-blue?logo=tailwind-css)](https://tailwindcss.com/) 
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

##  Project Overview

- Responsive frontend app for **blockchain / SaaS product pricing & checkout flow**.  
- Developed using **React**, styled with **Tailwind CSS**, with **React Router** for navigation.  
- Demonstrates **dynamic pricing**, **state management**, and **multi-page routing**.  
- Focused on **clean UI/UX**, responsive design, and professional look & feel.  

---

##  Key Features

1. **Pricing Selection Page**
   - Multiple plans: **Basic, Standard, Premium**  
   - Shows features, price per year, optional monthly breakdown  
   - Select **duration** (1, 3, 6, 9 years)  
   - Toggle **subscription vs one-time payment**  
   - Dynamic final price update  
   - "Proceed to Checkout" button  

2. **Checkout Page**
   - Displays selected plan details  
   - Billing information with **validation** (name & email format)  
   - Promo code input (optional)  
   - Mock payment buttons (Credit Card / PayPal)  
   - **Back to Pricing** button to update selection  
   - Shows **error messages** if required fields are empty or invalid  

3. **Success Page**
   - Confirmation message with plan, duration, final amount  
   - Optional **mock order ID**  
   - Button to navigate back to dashboard/home  

4. **Cancel Page**
   - Displays payment canceled message  
   - Retry checkout option  
   - Navigate back to pricing page  

5. **General**
   - Responsive design: **desktop, tablet, mobile**  
   - Component-based architecture  
   - State management for **plan selection, duration, subscription, final price**  
   - Clean, maintainable, professional code  

---

##  Tech Stack

- **Frontend**: React 18.2.0  
- **Styling**: Tailwind CSS 3.4.18  
- **Routing**: React Router v7  
- **Package Manager**: npm  
- **Optional**: Material UI / Bootstrap (not used in this project)  

---

##  Project Structure

frontend-pricing-checkout/
├─ src/
│ ├─ components/ # Reusable UI components
│ ├─ pages/ # Pages: Pricing, Checkout, Success, Cancel
│ ├─ App.jsx # Main router and app layout
│ └─ index.css # Tailwind CSS global styles
├─ package.json
├─ tailwind.config.cjs
├─ postcss.config.cjs
└─ README.md

##  Installation & Run

1. Clone repository
```bash
git clone https://github.com/khushirana09/frontend-pricing-checkout.git

2. Navigate into project folder
cd frontend-pricing-checkout

3. Install dependencies
npm install

4. Start development server
npm start


5. Open in browser
http://localhost:5173


# Usage Flow

- Select a Plan

Click a plan card to select

Choose duration and subscription option

Final price updates dynamically

- Proceed to Checkout

Enter Full Name and Email (validated)

Apply promo code if needed

Choose a payment method (mock)

- Payment Confirmation

On success → redirected to Success Page

On cancel → redirected to Cancel Page

# UI / UX Highlights

Modern, clean card-based layout for plans

Responsive buttons and input fields

Smooth hover effects on plan cards

Clear error messages with red borders for invalid input

Professional back button for easy navigation