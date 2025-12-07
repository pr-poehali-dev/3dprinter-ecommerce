import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const deliveryOptions = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      time: '1-2 дня',
      price: 'от 300 ₽',
      description: 'Доставим заказ прямо к вашей двери в удобное время',
      features: ['Москва и МО', 'Доставка в день заказа', 'Оплата при получении'],
    },
    {
      icon: 'Package',
      title: 'Пункты выдачи',
      time: '2-3 дня',
      price: 'от 150 ₽',
      description: 'Более 5000 пунктов выдачи по всей России',
      features: ['По всей России', 'Удобный график работы', 'Примерка перед оплатой'],
    },
    {
      icon: 'Plane',
      title: 'Экспресс доставка',
      time: 'в тот же день',
      price: 'от 800 ₽',
      description: 'Срочная доставка в течение нескольких часов',
      features: ['Только Москва', 'Доставка за 3 часа', 'Удобный временной интервал'],
    },
    {
      icon: 'Store',
      title: 'Самовывоз',
      time: 'сегодня',
      price: 'бесплатно',
      description: 'Забрать заказ из нашего офиса-склада',
      features: ['Москва, ул. Примерная, 123', 'Пн-Пт: 10:00-20:00', 'Сб-Вс: 11:00-18:00'],
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Оформление заказа',
      description: 'Выберите товары и оформите заказ на сайте',
    },
    {
      number: '2',
      title: 'Подтверждение',
      description: 'Мы свяжемся с вами для подтверждения заказа',
    },
    {
      number: '3',
      title: 'Сборка',
      description: 'Тщательно упакуем ваш заказ',
    },
    {
      number: '4',
      title: 'Доставка',
      description: 'Доставим заказ выбранным способом',
    },
  ];

  const faq = [
    {
      question: 'Как отследить мой заказ?',
      answer: 'После отправки заказа вы получите трек-номер на email и сможете отслеживать его в личном кабинете или на сайте транспортной компании.',
    },
    {
      question: 'Можно ли изменить адрес доставки?',
      answer: 'Да, вы можете изменить адрес доставки до момента отправки заказа. Свяжитесь с нашей службой поддержки по телефону или через чат.',
    },
    {
      question: 'Что делать, если товар поврежден?',
      answer: 'При получении обязательно проверьте товар. Если обнаружили повреждение, сделайте фото и свяжитесь с нами в течение 24 часов. Мы заменим товар или вернем деньги.',
    },
    {
      question: 'Доставляете ли вы в другие страны?',
      answer: 'Да, мы осуществляем международную доставку в страны СНГ. Стоимость и сроки рассчитываются индивидуально. Свяжитесь с нами для уточнения деталей.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами, наличными при получении (курьерская доставка), безналичный расчет для юридических лиц.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg shadow-primary/30">
            <Icon name="Truck" size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4">Доставка и оплата</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ доставки. Мы доставляем быстро и надежно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {deliveryOptions.map((option, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={option.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{option.time}</div>
                    <div className="text-xl font-heading font-bold text-primary">{option.price}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                    <span className="text-3xl font-heading font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-2">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-heading font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border-2 border-primary/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Застрахованная доставка</h3>
              <p className="text-sm text-muted-foreground">Все посылки застрахованы</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="PackageCheck" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Надежная упаковка</h3>
              <p className="text-sm text-muted-foreground">Защита от повреждений</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="RotateCcw" size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Легкий возврат</h3>
              <p className="text-sm text-muted-foreground">Возврат в течение 14 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
