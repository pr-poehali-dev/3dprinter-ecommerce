import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface Filament {
  name: string;
  price: string;
  image: string;
  type: string;
  specs: {
    diameter: string;
    weight: string;
    temperature: string;
    colors: string;
  };
  badge: string;
  badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline';
  description: string;
  features: string[];
  applications: string[];
}

const Filament = () => {
  const [selectedFilament, setSelectedFilament] = useState<Filament | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const filaments: Filament[] = [
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
      description: 'Самый популярный материал для 3D печати. Экологичный, легкий в использовании, не требует подогреваемого стола. Идеально подходит для начинающих и декоративных изделий.',
      features: [
        'Низкая температура печати',
        'Не требует подогрева стола',
        'Биоразлагаемый',
        'Минимальная усадка',
        'Яркие цвета',
        'Легко шлифуется',
      ],
      applications: ['Прототипирование', 'Декоративные изделия', 'Игрушки', 'Сувениры'],
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
      description: 'Прочный и устойчивый материал. Сочетает простоту PLA с прочностью ABS. Устойчив к влаге, ультрафиолету и химическим воздействиям. Идеален для функциональных деталей.',
      features: [
        'Высокая прочность',
        'Устойчивость к влаге',
        'Устойчивость к UV',
        'Химическая стойкость',
        'Легко печатается',
        'Прозрачные варианты',
      ],
      applications: ['Механические детали', 'Функциональные изделия', 'Корпуса', 'Уличное применение'],
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
      description: 'Профессиональный термостойкий пластик. Высокая прочность и ударостойкость. Требует закрытую камеру и подогреваемый стол. Идеален для функциональных деталей.',
      features: [
        'Высокая термостойкость',
        'Отличная ударопрочность',
        'Хорошая межслойная адгезия',
        'Легко обрабатывается',
        'Химическая стойкость',
        'Можно клеить ацетоном',
      ],
      applications: ['Автодетали', 'Корпуса электроники', 'Механизмы', 'Промышленность'],
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
      description: 'Гибкий и эластичный материал. Похож на резину, отлично растягивается и сжимается. Идеально подходит для чехлов, прокладок и гибких деталей. Требует низкой скорости печати.',
      features: [
        'Высокая эластичность',
        'Устойчивость к износу',
        'Маслостойкость',
        'Хорошая адгезия',
        'Стойкость к разрыву',
        'Мягкость на ощупь',
      ],
      applications: ['Чехлы', 'Прокладки', 'Гибкие шланги', 'Уплотнители'],
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
      description: 'Профессиональный инженерный материал. Исключительная прочность и устойчивость к износу. Требует закрытой камеры и сушки перед печатью. Идеален для функциональных деталей.',
      features: [
        'Высокая прочность',
        'Износостойкость',
        'Термостойкость',
        'Гибкость',
        'Химическая стойкость',
        'Механическая прочность',
      ],
      applications: ['Шестерни', 'Подшипники', 'Механические детали', 'Промышленность'],
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
      description: 'Композитный материал с древесными волокнами. Создает эффект натурального дерева, можно шлифовать и лакировать. Экологичный и безопасный. Идеален для декоративных изделий.',
      features: [
        'Эффект натурального дерева',
        'Можно шлифовать',
        'Приятный запах',
        'Легко печатается',
        'Биоразлагаемый',
        'Можно красить',
      ],
      applications: ['Декор', 'Сувениры', 'Мебельные элементы', 'Художественные изделия'],
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
      description: 'Композитный материал с металлическими частицами. Создает эффект настоящего металла. Тяжелее обычного пластика, можно полировать. Идеален для эксклюзивных изделий.',
      features: [
        'Эффект настоящего металла',
        'Можно полировать',
        'Большая плотность',
        'Ощущение металла',
        'Варианты: медь, бронза, сталь',
        'Легко обрабатывается',
      ],
      applications: ['Сувениры', 'Украшения', 'Декоративные элементы', 'Коллекционные изделия'],
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
      description: 'ПЛА с шелковистым блеском. Создает переливающийся эффект, напоминающий шелк. Яркие насыщенные цвета. Легко печатается, как обычный PLA. Идеален для декоративных изделий.',
      features: [
        'Шелковистый блеск',
        'Переливающийся эффект',
        'Яркие цвета',
        'Легко печатается',
        'Гладкая поверхность',
        'Биоразлагаемый',
      ],
      applications: ['Вазы', 'Декоративные изделия', 'Сувениры', 'Украшения'],
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
      description: 'ПЛА с фосфоресцирующими частицами. Светится в темноте после подзарядки от света. Оригинальный эффект для уникальных изделий. Легко печатается как обычный PLA.',
      features: [
        'Светится в темноте',
        'Фосфоресцирующий эффект',
        'Легко печатается',
        'Яркое свечение',
        'Долгое послесвечение',
        'Безопасно для детей',
      ],
      applications: ['Игрушки', 'Декор', 'Ночники', 'Оригинальные сувениры'],
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
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    setSelectedFilament(filament);
                    setIsOpen(true);
                  }}
                >
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedFilament && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <DialogTitle className="text-3xl font-heading mb-2">
                      {selectedFilament.name}
                    </DialogTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={selectedFilament.badgeVariant}>
                        {selectedFilament.badge}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{selectedFilament.type}</span>
                    </div>
                  </div>
                  <div className="text-6xl">{selectedFilament.image}</div>
                </div>
                <DialogDescription className="text-base text-foreground">
                  {selectedFilament.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Технические характеристики</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Diameter" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Диаметр</p>
                        <p className="font-semibold">{selectedFilament.specs.diameter}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Weight" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Вес</p>
                        <p className="font-semibold">{selectedFilament.specs.weight}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Thermometer" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Температура</p>
                        <p className="font-semibold text-sm">{selectedFilament.specs.temperature}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Palette" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Цвета</p>
                        <p className="font-semibold text-sm">{selectedFilament.specs.colors}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Ключевые особенности</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedFilament.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Применение</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFilament.applications.map((app, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-card rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Цена</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-heading font-bold text-secondary">
                        {selectedFilament.price}
                      </span>
                      <span className="text-2xl text-muted-foreground ml-1">₽</span>
                    </div>
                  </div>
                  <Button size="lg" className="shadow-lg shadow-secondary/30">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Filament;