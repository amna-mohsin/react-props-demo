
# React Props Demo – Parent → Child, Child → Parent & Prop Drilling

A beginner-friendly React application built with **Vite.js** that demonstrates **props passing**, **child-to-parent communication**, and **prop drilling**. The app allows the parent component to send messages to child components and receive updates from them, illustrating how data flows through multiple component layers.

---

## Overview

This project illustrates how React handles data flow between components. It is ideal for beginners who want to understand:

* Passing data from **Parent → Child** using props
* Updating parent state from **Child → Parent** using functions
* Prop drilling through multiple nested components
* Component composition and reusability
* Controlled updates and UI re-rendering

---

## Key Features

* **Parent → Child Communication:** Parent sends messages via props
* **Child → Parent Communication:** Children can update parent state via callback functions
* **Prop Drilling:** Demonstrates passing props through multiple component layers
* **Component Composition:** Parent, Child, and GrandChild components
* **Interactive UI:** Buttons in child components update the parent message dynamically
* **Clean Styling:** Minimal CSS for readability and clarity

---

## File Structure

```
src/
├── App.js         # Main Parent component
├── App.css        # Styling for all components
├── index.js       # Application entry point
└── components/
    ├── Child.js   # Child component
    └── GrandChild.js # GrandChild component demonstrating prop drilling
```

---

## Installation & Setup

Follow the steps below to run the project locally.

### **Prerequisites**

Ensure **Node.js** and **npm** (or yarn/pnpm) are installed.

### **1. Clone the repository**

```bash
git clone https://github.com/amna-mohsin/react-props-demo.git
cd react-props-demo
```

### **2. Install dependencies**

```bash
npm install
# or
yarn install
```

### **3. Start the development server**

```bash
npm run dev
# or
yarn dev
```

Open the app in your browser at:
**[http://localhost:5173](http://localhost:5173)**

---

## Available Scripts

* **`npm run dev`** – Runs the app in development mode
* **`npm run build`** – Builds the app for production
* **`npm run preview`** – Previews the production build locally

Learn more in the Vite documentation: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

---

## Learn More

* [React Documentation](https://react.dev/)
* [Vite Documentation](https://vitejs.dev/)

---

## Owner

* Developed and maintained by **Amna Mohsin**
* For collaborations or inquiries, connect on [LinkedIn](https://www.linkedin.com/in/amna-m98/)

---

## License

This project is **open-source** and free to use.
