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

interface Printer {
  name: string;
  price: string;
  image: string;
  specs: {
    volume: string;
    speed: string;
    layer: string;
    materials: string;
  };
  badge: string;
  badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline';
  description: string;
  features: string[];
}

const Printers = () => {
  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const printers: Printer[] = [
    {
      name: 'Prusa MK4',
      price: '89 990',
      image: '🖨️',
      specs: {
        volume: '250×210×220 мм',
        speed: 'до 200 мм/с',
        layer: '0.05-0.3 мм',
        materials: 'PLA, PETG, ABS, ASA',
      },
      badge: 'Хит продаж',
      badgeVariant: 'default' as const,
      description: 'Надежный и проверенный 3D принтер от чешского производителя. Идеально подходит как для профессионалов, так и для любителей. Автоматическая калибровка стола и датчик окончания филамента.',
      features: [
        'Автоматическая калибровка стола',
        'Датчик окончания филамента',
        'Съёмная магнитная платформа',
        'Тихая работа',
        'Открытый исходный код',
        'Большое сообщество',
      ],
    },
    {
      name: 'Bambu Lab X1-Carbon',
      price: '149 990',
      image: '⚡',
      specs: {
        volume: '256×256×256 мм',
        speed: 'до 500 мм/с',
        layer: '0.05-0.4 мм',
        materials: 'PLA, PETG, ABS, PA, PC',
      },
      badge: 'Премиум',
      badgeVariant: 'secondary' as const,
      description: 'Революционный принтер с рекордной скоростью печати. Закрытая камера с контролем температуры, автоматическая калибровка и система мультиматериальной печати делают его идеальным для профессионального использования.',
      features: [
        'Скорость печати до 500 мм/с',
        'Автоматическая калибровка лидаром',
        'Закрытая камера с подогревом',
        'Мультиматериальная печать (4 цвета)',
        'AI камера для контроля печати',
        'Wi-Fi и облачная интеграция',
      ],
    },
    {
      name: 'Creality K1 Max',
      price: '119 990',
      image: '🚀',
      specs: {
        volume: '300×300×300 мм',
        speed: 'до 600 мм/с',
        layer: '0.1-0.35 мм',
        materials: 'PLA, PETG, ABS, TPU',
      },
      badge: 'Новинка',
      badgeVariant: 'destructive' as const,
      description: 'Самый быстрый принтер в линейке Creality с огромной областью печати. Идеально подходит для печати крупных моделей и прототипов. Интуитивный сенсорный экран и простая настройка.',
      features: [
        'Скорость печати до 600 мм/с',
        'Огромная область печати 300×300×300 мм',
        'Автоматическое выравнивание',
        '4.3" сенсорный экран',
        'Прямой привод экструдера',
        'Встроенная камера',
      ],
    },
    {
      name: 'Anycubic Kobra 2 Pro',
      price: '54 990',
      image: '💎',
      specs: {
        volume: '250×220×220 мм',
        speed: 'до 300 мм/с',
        layer: '0.1-0.35 мм',
        materials: 'PLA, PETG, ABS',
      },
      badge: 'Выгодно',
      badgeVariant: 'outline' as const,
      description: 'Отличное соотношение цены и качества. Высокая скорость печати, надежная конструкция и автоматическое выравнивание стола делают этот принтер идеальным выбором для среднего уровня.',
      features: [
        'Высокая скорость 300 мм/с',
        'Автоматическое выравнивание 25 точек',
        'Прямой привод экструдера',
        'Гибкая магнитная платформа PEI',
        'Датчик окончания филамента',
        'Возобновление печати после сбоя',
      ],
    },
    {
      name: 'Ultimaker S5',
      price: '329 990',
      image: '🏆',
      specs: {
        volume: '330×240×300 мм',
        speed: 'до 150 мм/с',
        layer: '0.06-0.4 мм',
        materials: 'PLA, PETG, ABS, Nylon, PC',
      },
      badge: 'Профессионал',
      badgeVariant: 'secondary' as const,
      description: 'Профессиональный принтер промышленного уровня. Двойной экструдер для многоцветной печати и растворимых поддержек. Надежность и точность для серьезных проектов.',
      features: [
        'Двойной экструдер',
        'Промышленная точность',
        'Закрытая камера',
        'Большая область печати',
        'Сенсорный экран 4.7"',
        'Поддержка инженерных материалов',
      ],
    },
    {
      name: 'Ender-3 V3 SE',
      price: '29 990',
      image: '🌟',
      specs: {
        volume: '220×220×250 мм',
        speed: 'до 250 мм/с',
        layer: '0.1-0.4 мм',
        materials: 'PLA, PETG, ABS',
      },
      badge: 'Для начинающих',
      badgeVariant: 'outline' as const,
      description: 'Идеальный выбор для начинающих. Простая сборка, интуитивное управление и доступная цена. Несмотря на бюджетную стоимость, обеспечивает высокое качество печати.',
      features: [
        'Готов к работе из коробки',
        'Автоматическое выравнивание',
        'Быстрая сборка за 20 минут',
        'Удобный интерфейс',
        'Прямой привод экструдера',
        'Отличная цена для новичков',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-6 shadow-lg shadow-primary/30">
            <Icon name="Printer" size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            3D Принтеры
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональное оборудование для прототипирования, мелкосерийного производства и творчества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printers.map((printer, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={printer.badgeVariant}>{printer.badge}</Badge>
                  <div className="text-5xl">{printer.image}</div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                  {printer.name}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Box" size={16} className="mr-2 text-primary" />
                    <span>Объем: {printer.specs.volume}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Zap" size={16} className="mr-2 text-primary" />
                    <span>Скорость: {printer.specs.speed}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Layers" size={16} className="mr-2 text-primary" />
                    <span>Слой: {printer.specs.layer}</span>
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <Icon name="Package" size={16} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>{printer.specs.materials}</span>
                  </div>
                </div>

                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {printer.price}
                  </span>
                  <span className="text-lg text-muted-foreground ml-1">₽</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    setSelectedPrinter(printer);
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Гарантия 2 года</h3>
              <p className="text-sm text-muted-foreground">На все принтеры</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Сервисное обслуживание</h3>
              <p className="text-sm text-muted-foreground">Ремонт и настройка</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Обучение</h3>
              <p className="text-sm text-muted-foreground">Бесплатная консультация</p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPrinter && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <DialogTitle className="text-3xl font-heading mb-2">
                      {selectedPrinter.name}
                    </DialogTitle>
                    <Badge variant={selectedPrinter.badgeVariant}>
                      {selectedPrinter.badge}
                    </Badge>
                  </div>
                  <div className="text-6xl">{selectedPrinter.image}</div>
                </div>
                <DialogDescription className="text-base text-foreground">
                  {selectedPrinter.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Технические характеристики</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Box" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Объем печати</p>
                        <p className="font-semibold">{selectedPrinter.specs.volume}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Zap" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Скорость</p>
                        <p className="font-semibold">{selectedPrinter.specs.speed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Layers" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Толщина слоя</p>
                        <p className="font-semibold">{selectedPrinter.specs.layer}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Package" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Материалы</p>
                        <p className="font-semibold text-sm">{selectedPrinter.specs.materials}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Ключевые особенности</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {selectedPrinter.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-6 bg-card rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Цена</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-heading font-bold text-primary">
                        {selectedPrinter.price}
                      </span>
                      <span className="text-2xl text-muted-foreground ml-1">₽</span>
                    </div>
                  </div>
                  <Button size="lg" className="shadow-lg shadow-primary/30">
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

export default Printers;