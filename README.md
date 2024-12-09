# AI Form Builder - SaaS Application

<div >
  
  <p>
    AI Form Builder is a SaaS platform that leverages advanced AI technology to allow users to effortlessly generate, edit, and share forms. With seamless integrations, powerful features, and a user-friendly interface, it's the ultimate tool for creating versatile forms that can be shared via links, with responses exportable in XLSX format.
  </p>
  <br />
 
  </a>
</div>

---



## ⚙️ Tech Stack

AI Form Builder utilizes modern tools and frameworks to deliver a robust and scalable experience:

- **Framework**: Next.js with TypeScript
- **AI Integration**: Google Gemini API
- **Authentication**: Clerk
- **Styling**: Tailwind CSS, Daisy UI
- **Database**: PostgreSQL with Drizzle ORM
- **Hosting**: Vercel
- **Payment Gateway**: Stripe
- **UI Components**: ShadCN UI and Eternity UI

---

## 🔋 Features

### 🧠 AI-Driven Form Creation
Generate forms instantly using AI-powered prompts, eliminating manual effort.

### 🎨 Customization and Themes
Choose from over 20+ pre-designed themes and personalize forms to match your brand.

### ✏️ Editable Forms
Easily modify forms with a user-friendly interface and edit existing fields.

### 📊 Response Recording and Exporting
Efficiently record responses and export them in XLSX format for analysis.

### 🌐 Seamless Integration
Includes authentication, payment gateway integration, and a powerful dashboard.

### 🖼️ Phenomenal Landing Page
A visually engaging and modern landing page to attract and retain users.

### 🪙 Pro and Free Plans
Flexible pricing plans to cater to individual and business users.

### 🚀 Deployment Ready
Deploy the app effortlessly on cloud platforms like Vercel.

---

## ⚙️ Environment Setup

The application requires the following environment variables to be configured in a `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your-sign-in-url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your-sign-up-url
NEXT_PUBLIC_DATABASE_URL_CONFIG=your-database-url
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_BASE_URL=your-base-url
