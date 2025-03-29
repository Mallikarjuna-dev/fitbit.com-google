# Fitbit Clone

A responsive **Fitbit Clone** built using **Next.js (App Router)** and **Tailwind CSS**, replicating the design and functionality of the Fitbit product store.

## 🚀 Features

- Fully responsive UI for **desktop, tablet, and mobile**
- **Navigation Bar** with product categories and search/cart icons
- **Hero Section** showcasing Fitbit smartwatches
- **Product Sections** with background images and text overlays
- **Footer** with links and social media icons
- **Optimized Tailwind CSS utility classes** for styling

## 📁 Folder Structure

```
fitbit-clone/
│── public/                # Static assets (images, icons, etc.)
│── src/
│   ├── app/
│   │   ├── layout.js      # Main layout file
│   │   ├── page.js        # Home page component
│   ├── components/
│   │   ├── Navbar.js      # Navigation bar
│   │   ├── Footer.js      # Footer section
│   │   ├── Hero.js        # Hero section component
│   ├── styles/
│   │   ├── globals.css    # Global Tailwind styles
│── package.json           # Project dependencies
│── tailwind.config.js     # Tailwind configuration
│── postcss.config.js      # PostCSS configuration
│── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/Mallikarjuna-dev/fitbit.com-google.git
   cd fitbit.com-google
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Styling

- Uses **Tailwind CSS** for fast and efficient styling
- Responsive design with **flexbox** and **grid layout**
- Background images handled via **Tailwind utility classes**

## 📦 Dependencies

- **Next.js** - React framework for SSR & SSG
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon set for UI elements

## 🌐 Deployment

Deploy the project easily on **Vercel**:

```sh
vercel deploy
```

**Deployed Link:**
