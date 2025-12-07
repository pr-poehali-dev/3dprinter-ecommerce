import Icon from '@/components/ui/icon';

const FilamentBenefits = () => {
  return (
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
  );
};

export default FilamentBenefits;
