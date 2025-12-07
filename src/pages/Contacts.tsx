import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      items: ['+7 (999) 123-45-67', '+7 (999) 765-43-21'],
      description: 'Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      items: ['info@storel.ru', 'support@storel.ru'],
      description: 'Ответим в течение часа',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      items: ['г. Москва, ул. Примерная, д. 123', 'офис 456'],
      description: 'Самовывоз и шоу-рум',
    },
    {
      icon: 'MessageCircle',
      title: 'Мессенджеры',
      items: ['WhatsApp', 'Telegram'],
      description: 'Быстрая связь 24/7',
    },
  ];

  const socials = [
    { name: 'VK', icon: 'MessageCircle', color: 'from-blue-500 to-blue-600' },
    { name: 'Telegram', icon: 'Send', color: 'from-sky-500 to-sky-600' },
    { name: 'YouTube', icon: 'Youtube', color: 'from-red-500 to-red-600' },
    { name: 'Дзен', icon: 'Newspaper', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg shadow-primary/30">
            <Icon name="Mail" size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи и готовы помочь. Выберите удобный способ связи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name={contact.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3">{contact.title}</h3>
                {contact.items.map((item, idx) => (
                  <p key={idx} className="text-foreground font-medium mb-1">
                    {item}
                  </p>
                ))}
                <p className="text-sm text-muted-foreground mt-2">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Напишите нам</h2>
            <Card className="bg-card/50 backdrop-blur-sm border-2">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите, чем мы можем помочь..." rows={5} />
                  </div>
                  <Button className="w-full shadow-lg shadow-primary/30">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Мы в соцсетях</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socials.map((social, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon name={social.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold">{social.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-2 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold mb-4">График работы</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Суббота - Воскресенье</span>
                    <span className="font-semibold">11:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Праздничные дни</span>
                    <span className="font-semibold">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary border-0 shadow-2xl shadow-primary/30">
              <CardContent className="p-6 text-center text-white">
                <Icon name="Headphones" size={40} className="mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Служба поддержки 24/7</h3>
                <p className="mb-4 text-white/90">Всегда готовы помочь с выбором и настройкой оборудования</p>
                <Button variant="secondary" className="w-full">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Начать чат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-2 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-muted/30 h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-xl font-heading font-semibold text-muted-foreground">Карта офиса</p>
                <p className="text-sm text-muted-foreground mt-2">г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
