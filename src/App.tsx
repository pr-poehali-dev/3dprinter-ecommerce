import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import Index from "@/pages/Index";
import Printers from '@/pages/Printers';
import Filament from '@/pages/Filament';
import About from '@/pages/About';
import Delivery from '@/pages/Delivery';
import Contacts from '@/pages/Contacts';
import NotFound from "@/pages/NotFound";
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const queryClient = new QueryClient();

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/printers', label: 'Принтеры' },
    { path: '/filament', label: 'Филамент' },
    { path: '/about', label: 'О компании' },
    { path: '/delivery', label: 'Доставка' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center overflow-hidden p-1">
              <img src="https://cdn.poehali.dev/files/логоSl.png" alt="SToreL Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SToreL
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? 'default' : 'ghost'}
                  className="font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-2 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={location.pathname === link.path ? 'default' : 'ghost'}
                      className="w-full justify-start font-medium"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center overflow-hidden p-0.5">
                <img src="https://cdn.poehali.dev/files/логоSl.png" alt="SToreL Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SToreL
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональные 3D принтеры и филамент для любых задач
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/printers" className="text-sm text-muted-foreground hover:text-primary transition-colors">3D Принтеры</Link></li>
              <li><Link to="/filament" className="text-sm text-muted-foreground hover:text-primary transition-colors">Филамент</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О компании</Link></li>
              <li><Link to="/delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@storel.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 SToreL. Все права защищены
        </div>
      </div>
    </footer>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/printers" element={<Printers />} />
              <Route path="/filament" element={<Filament />} />
              <Route path="/about" element={<About />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;