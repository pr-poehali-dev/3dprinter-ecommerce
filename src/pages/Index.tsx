import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    {
      title: '3D Принтеры',
      description: 'Профессиональное оборудование для прототипирования и производства',
      icon: 'Printer',
      link: '/printers',
      gradient: 'from-primary to-blue-600',
    },
    {
      title: 'Филамент',
      description: 'Широкий выбор материалов: PLA, ABS, PETG, Nylon и другие',
      icon: 'Package',
      link: '/filament',
      gradient: 'from-secondary to-purple-600',
    },
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на всё оборудование',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставка по России в течение 2-5 дней',
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Техническая поддержка и консультации',
    },
    {
      icon: 'Award',
      title: 'Лучшие бренды',
      description: 'Работаем только с проверенными производителями',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-float shadow-2xl shadow-primary/50 overflow-hidden p-3">
                <img src="https://cdn.poehali.dev/files/логоSl.png" alt="SToreL Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              SToreL
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Инновационные решения для 3D печати
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессиональное оборудование и материалы для воплощения ваших идей в реальность
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/printers">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                  <Icon name="Printer" size={20} className="mr-2" />
                  Выбрать принтер
                </Button>
              </Link>
              <Link to="/filament">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Icon name="Package" size={20} className="mr-2" />
                  Каталог материалов
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
              {categories.map((category, index) => (
                <Link to={category.link} key={index}>
                  <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon name={category.icon as any} size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">Надежность и качество в каждой детали</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;