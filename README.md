# SuperApp - Next.js Super App Clone (Gojek-like)

Aplikasi web super app modern yang dibangun dengan Next.js 16, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, dan Prisma ORM. Terinspirasi dari Gojek dengan fitur transportasi, makanan, paket, e-wallet, dan pembayaran.

## 🚀 Fitur Utama

- **Modern & Responsive UI** - Mobile-first design yang indah seperti Gojek
- **Authentication** - Login/Register dengan JWT dan refresh tokens
- **Protected Routes** - Akses halaman yang dilindungi untuk user terautentikasi
- **Dashboard** - Menampilkan saldo, layanan, promo, dan aktivitas terbaru
- **Orders Management** - Riwayat pesanan dengan status real-time
- **Wallet System** - Saldo dompet, riwayat transaksi, top-up, withdraw
- **User Profile** - Kelola profile, logout, dark mode toggle
- **Dark Mode** - Support mode gelap untuk kenyamanan mata
- **Animations** - Smooth transitions dengan Framer Motion
- **Skeleton Loaders** - Loading states yang profesional

## 📁 Folder Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── login.ts
│   │   ├── register.ts
│   │   ├── verify.ts
│   │   └── refresh.ts
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── orders/page.tsx
│   ├── wallet/page.tsx
│   ├── profile/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── dashboard/
│   └── navigation/
├── lib/
└── utils/

prisma/
└── schema.prisma

.env
tsconfig.json
package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Lucide React Icons
- **Animations**: Framer Motion
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT + Refresh Tokens
- **Password**: bcrypt

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Git

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/superapp.git
cd superapp
npm install
```

### 2. Setup Environment Variables

Create `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/superapp_db"
JWT_SECRET="your_jwt_secret_key_here_min_32_chars"
JWT_REFRESH_SECRET="your_refresh_secret_key_here_min_32_chars"
```

### 3. Setup Database

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Start Development

```bash
npm run dev
```

Open http://localhost:3000

## 🔐 Authentication System

### JWT Tokens
- **Access Token**: 15 menit expiry
- **Refresh Token**: 7 hari expiry

### API Endpoints
- `POST /api/auth/register` - Register user baru
- `POST /api/auth/login` - Login dengan email & password
- `POST /api/auth/verify` - Verify token
- `POST /api/auth/refresh` - Refresh access token

## 📱 Pages

### Public
- `/` - Landing page
- `/login` - Login form
- `/register` - Register form

### Protected (Login Required)
- `/dashboard` - Main dashboard
- `/orders` - Order history
- `/wallet` - E-wallet & transactions
- `/profile` - User profile

## 🎨 Styling

- **Colors**: Blue (#2563eb), Cyan (#06b6d4)
- **Dark Mode**: Full support dengan `dark:` classes
- **Responsive**: Mobile-first design (sm/md/lg breakpoints)

## 🗄️ Database Schema

```prisma
model User {
  id       String  @id @default(uuid())
  name     String
  email    String  @unique
  password String
  balance  Float   @default(0)
  orders   Order[]
}

model Service {
  id       String  @id @default(uuid())
  name     String
  icon     String
  orders   Order[]
}

model Order {
  id        String  @id @default(uuid())
  userId    String
  serviceId String
  status    String
  amount    Float
}
```

## 🚀 Build & Deploy

### Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## 🐛 Troubleshooting

**Hydration Error**: Already fixed in RecentActivity component with useEffect
**Module Not Found**: Restart dev server and delete `.next` folder
**DB Connection**: Check DATABASE_URL and ensure PostgreSQL is running
**Token Expired**: Auto-refresh or redirect to login

## 💡 Best Practices

✅ TypeScript strict mode
✅ Mobile-first responsive design
✅ Framer Motion animations
✅ Secure password hashing (bcrypt)
✅ JWT token management
✅ Protected routes
✅ Loading states with skeletons
✅ Dark mode support

## 📚 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io/docs/)

## 📄 License

MIT License - Free for personal and commercial use

---

**Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS**

Happy Coding! 🚀
