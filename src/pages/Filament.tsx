import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Filament = () => {
  const filaments = [
    {
      name: 'PLA Premium',
      price: '1 290',
      image: '🎨',
      type: 'PLA',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '190-220°C',
        colors: '20+ цветов',
      },
      badge: 'Популярный',
      badgeVariant: 'default' as const,
    },
    {
      name: 'PETG Strong',
      price: '1 590',
      image: '💪',
      type: 'PETG',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '220-250°C',
        colors: '15+ цветов',
      },
      badge: 'Прочный',
      badgeVariant: 'secondary' as const,
    },
    {
      name: 'ABS Professional',
      price: '1 490',
      image: '🔥',
      type: 'ABS',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '230-260°C',
        colors: '12+ цветов',
      },
      badge: 'Термостойкий',
      badgeVariant: 'destructive' as const,
    },
    {
      name: 'TPU Flexible',
      price: '2 190',
      image: '🌀',
      type: 'TPU',
      specs: {
        diameter: '1.75 мм',
        weight: '0.5 кг',
        temperature: '210-230°C',
        colors: '8 цветов',
      },
      badge: 'Гибкий',
      badgeVariant: 'secondary' as const,
    },
    {
      name: 'Nylon Ultra',
      price: '2 890',
      image: '⚙️',
      type: 'Nylon',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '240-270°C',
        colors: '5 цветов',
      },
      badge: 'Инженерный',
      badgeVariant: 'secondary' as const,
    },
    {
      name: 'Wood Fill',
      price: '1 890',
      image: '🌳',
      type: 'PLA+Wood',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '190-220°C',
        colors: 'Натуральное дерево',
      },
      badge: 'Эко',
      badgeVariant: 'outline' as const,
    },
    {
      name: 'Metal Fill',
      price: '2 490',
      image: '🔩',
      type: 'PLA+Metal',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '195-220°C',
        colors: 'Медь, бронза, сталь',
      },
      badge: 'Премиум',
      badgeVariant: 'secondary' as const,
    },
    {
      name: 'Silk PLA',
      price: '1 390',
      image: '✨',
      type: 'PLA Silk',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '190-220°C',
        colors: '15+ цветов',
      },
      badge: 'Блестящий',
      badgeVariant: 'outline' as const,
    },
    {
      name: 'Glow in Dark',
      price: '1 690',
      image: '🌙',
      type: 'PLA Glow',
      specs: {
        diameter: '1.75 мм',
        weight: '1 кг',
        temperature: '190-220°C',
        colors: '4 цвета',
      },
      badge: 'Светящийся',
      badgeVariant: 'default' as const,
    },
  ];

  const categories = [
    { name: 'PLA', icon: 'Palette', description: 'Универсальный, экологичный' },
    { name: 'PETG', icon: 'Shield', description: 'Прочный, износостойкий' },
    { name: 'ABS', icon: 'Flame', description: 'Термостойкий, ударопрочный' },
    { name: 'TPU', icon: 'Waves', description: 'Гибкий, эластичный' },
    { name: 'Nylon', icon: 'Cog', description: 'Инженерный, прочный' },
    { name: 'Специальные', icon: 'Sparkles', description: 'Композитные материалы' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-purple-600 rounded-2xl mb-6 shadow-lg shadow-secondary/30">
            <Icon name="Package" size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent">
            Филамент для 3D печати
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор материалов для любых задач: от прототипирования до финальных изделий
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50 bg-card/50 backdrop-blur-sm text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name={category.icon as any} size={20} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filaments.map((filament, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50 bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={filament.badgeVariant}>{filament.badge}</Badge>
                  <div className="text-5xl">{filament.image}</div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-secondary transition-colors">
                  {filament.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{filament.type}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Diameter" size={16} className="mr-2 text-secondary" />
                    <span>Диаметр: {filament.specs.diameter}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Weight" size={16} className="mr-2 text-secondary" />
                    <span>Вес: {filament.specs.weight}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Thermometer" size={16} className="mr-2 text-secondary" />
                    <span>{filament.specs.temperature}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Icon name="Palette" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                    <span>{filament.specs.colors}</span>
                  </div>
                </div>

                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-heading font-bold text-secondary">
                    {filament.price}
                  </span>
                  <span className="text-lg text-muted-foreground ml-1">₽</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Info" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle2" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Качество</h3>
              <p className="text-sm text-muted-foreground">Европейские стандарты</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Доставка</h3>
              <p className="text-sm text-muted-foreground">В день заказа</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Упаковка</h3>
              <p className="text-sm text-muted-foreground">Вакуумная с силикагелем</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="RotateCcw" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Возврат</h3>
              <p className="text-sm text-muted-foreground">В течение 14 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filament;
