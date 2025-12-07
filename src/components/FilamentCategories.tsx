import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Category {
  name: string;
  icon: string;
  description: string;
}

interface FilamentCategoriesProps {
  categories: Category[];
}

const FilamentCategories = ({ categories }: FilamentCategoriesProps) => {
  return (
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
  );
};

export default FilamentCategories;
