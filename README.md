# Vendora - E-commerce Storefront

A modern, full-stack online store built with React, Next.js, TypeScript, and Tailwind CSS. This project demonstrates a complete e-commerce solution with product catalog, shopping cart, checkout flow, user authentication, and order management.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse products with filtering, search, and category navigation
- **Product Details**: Detailed product pages with image galleries and specifications
- **Shopping Cart**: Add, remove, and update quantities with persistent storage
- **Checkout Flow**: Complete checkout process with form validation
- **User Authentication**: Login/register functionality with persistent sessions
- **Order Management**: Order history, tracking, and confirmation pages
- **Admin Panel**: Dashboard for managing products and orders

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Zustand for global state management
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: React Hook Form with Zod validation
- **API Integration**: FakeStore API for product data
- **Modern UI**: Clean, modern interface with Lucide React icons

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **API**: FakeStore API (DummyJSON)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vendora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
```bash
npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── products/          # Product listing and detail pages
│   ├── orders/            # Order management pages
│   ├── checkout/          # Checkout flow
│   ├── profile/           # User profile
│   ├── admin/             # Admin dashboard
│   └── ...
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation component
│   ├── ProductCard.tsx   # Product display component
│   ├── CartDrawer.tsx    # Shopping cart sidebar
│   └── ...
├── store/                 # Zustand state stores
│   ├── cartStore.ts      # Shopping cart state
│   └── userStore.ts      # User authentication state
├── lib/                   # Utility functions and API calls
│   ├── api.ts            # API integration
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts          # Shared types
```

## 🎯 Key Components

### Shopping Cart
- Persistent cart storage using Zustand
- Add/remove/update product quantities
- Real-time price calculations
- Discount support

### User Authentication
- Mock authentication system
- Persistent user sessions
- Profile management
- Order history tracking

### Product Management
- Dynamic product loading from API
- Category-based filtering
- Search functionality
- Image galleries

### Checkout Process
- Multi-step checkout form
- Address validation
- Payment method selection
- Order confirmation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **Railway**: Full-stack deployment support
- **Render**: Easy deployment with GitHub integration

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_API_URL=https://dummyjson.com/products
```

### API Configuration
The app uses the FakeStore API (DummyJSON) for product data. You can modify the API endpoints in `src/lib/api.ts` to use your own backend.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: Touch-friendly interface
- **Tablet**: Optimized layouts
- **Desktop**: Full feature set

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for custom design tokens
- Update component styles in individual files
- Customize color schemes and typography

### Features
- Add new product categories
- Implement real payment processing
- Add product reviews and ratings
- Integrate with real backend APIs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [FakeStore API](https://dummyjson.com/) for product data
- [Lucide React](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework

## 📞 Support

For support or questions, please open an issue in the repository or contact the developer:

- **Email**: madhanmohanreddyperam06@gmail.com
- **Mobile**: +91 9110395993



---

**Happy Shopping! 🛒**