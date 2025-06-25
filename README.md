# Government of Pakistan – Official National Portal 

🌐 Live Site: [govtofpakistan.vercel.app](https://govtofpakistan.vercel.app)

This project is the **official frontend redesign of the Government of Pakistan's national portal**, developed with modern web standards for performance, accessibility, and citizen-centric interaction.

Commissioned by the **Government of Pakistan**, this portal reflects the digital transformation vision of the state, offering a responsive, efficient, and secure experience for the public.

---

## 📌 Objective

To provide a **high-performance, accessible, and mobile-first** experience for all users accessing government information online — unifying federal ministries, departments, provinces, key leadership, and institutions under a single interactive platform.

This redesign ensures:
- **Trustworthy national branding**
- **Scalability for future services**
- **Ease of access for all citizens and visitors**

---

## 🧰 Technology Stack

| Layer           | Technology               |
|----------------|---------------------------|
| Framework       | [Next.js](https://nextjs.org/) (App Router) |
| Styling         | [Tailwind CSS](https://tailwindcss.com/)     |
| Animation       | [Framer Motion](https://framer.com/motion)   |
| Language        | TypeScript                |
| Deployment      | [Vercel](https://vercel.com/)                |

---

## 🏛 Portal Structure

| Route                        | Purpose                                                       |
|-----------------------------|---------------------------------------------------------------|
| `/`                         | Homepage: National identity, stats, ministries, judiciary     |
| `/government`               | Government portal index                                       |
| `/government/ministry`      | Interactive list of federal ministries (with modals)          |
| `/government/provinces`     | Showcase of all provinces and territories                     |
| `/government/departments`   | Overview of key departments and divisions                     |
| `/contact`                  | Official contact page with verified government info           |
| `/not-found`                | Custom 404 error page with national visual design             |

---

## 🧩 Key Modules

- `Hero.tsx` – Government branding and top-level message
- `Navbar.tsx` & `Footer.tsx` – Persistent site-wide navigation and national footer
- `Stats.tsx` – Live animated statistical counters
- `KeyRoles.tsx` – President, Prime Minister, and national offices
- `Judiciary.tsx` – Overview of judicial system
- `Security.tsx` – Security, law enforcement, and intelligence agencies
- `Ministry.tsx`, `Provinces.tsx`, `Departments.tsx` – Government bodies directory

---

## 📱 Accessibility & UX Principles

- ✅ Mobile-first and fully responsive (from 320px to 4K screens)
- ✅ High contrast, readable fonts, and accessible color palette
- ✅ Keyboard navigation and screen reader support
- ✅ Fast load times with static rendering and code splitting
- ✅ Urdu/English-ready structure (future implementation)

---

## 🚀 Local Setup (Development Mode)

```bash
# Clone the official repository
git clone https://github.com/minamrahman727/GOP.git
cd GOP

# Install dependencies
npm install

# Start the local server
npm run dev
