import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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

interface FilamentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  filament: Filament | null;
}

const FilamentModal = ({ isOpen, onOpenChange, filament }: FilamentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {filament && (
          <>
            <DialogHeader>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <DialogTitle className="text-3xl font-heading mb-2">
                    {filament.name}
                  </DialogTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant={filament.badgeVariant}>
                      {filament.badge}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{filament.type}</span>
                  </div>
                </div>
                <div className="text-6xl">{filament.image}</div>
              </div>
              <DialogDescription className="text-base text-foreground">
                {filament.description}
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
                      <p className="font-semibold">{filament.specs.diameter}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Weight" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Вес</p>
                      <p className="font-semibold">{filament.specs.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Thermometer" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Температура</p>
                      <p className="font-semibold text-sm">{filament.specs.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Palette" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Цвета</p>
                      <p className="font-semibold text-sm">{filament.specs.colors}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">Ключевые особенности</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {filament.features.map((feature, index) => (
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
                  {filament.applications.map((app, index) => (
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
                      {filament.price}
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
  );
};

export default FilamentModal;
