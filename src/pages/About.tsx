import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Наша миссия',
      description: 'Делать 3D печать доступной для каждого, предоставляя качественное оборудование и материалы по честным ценам',
    },
    {
      icon: 'Eye',
      title: 'Наше видение',
      description: 'Стать лидером российского рынка 3D печати, создавая экосистему для профессионалов и энтузиастов',
    },
    {
      icon: 'Heart',
      title: 'Наши ценности',
      description: 'Качество, честность, инновации и забота о клиентах — основа нашей работы',
    },
  ];

  const stats = [
    { number: '5+', label: 'Лет на рынке' },
    { number: '10000+', label: 'Довольных клиентов' },
    { number: '50+', label: 'Моделей принтеров' },
    { number: '200+', label: 'Видов материалов' },
  ];

  const team = [
    {
      role: 'Основатель и CEO',
      description: '15 лет опыта в аддитивных технологиях',
      icon: 'User',
    },
    {
      role: 'Технический директор',
      description: 'Эксперт по настройке и модификации принтеров',
      icon: 'Wrench',
    },
    {
      role: 'Отдел продаж',
      description: 'Помогут выбрать оптимальное решение',
      icon: 'Users',
    },
    {
      role: 'Служба поддержки',
      description: 'Всегда на связи 24/7',
      icon: 'Headphones',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg shadow-primary/30">
            <Icon name="Building2" size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4">О компании</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SToreL — это команда энтузиастов 3D печати, объединенных общей целью сделать аддитивные технологии доступными каждому
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card/50 backdrop-blur-sm border-2 animate-scale-in">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                Мы начали свой путь в 2019 году как небольшой магазин для энтузиастов 3D печати. 
                За эти годы мы выросли в крупнейшего поставщика 3D принтеров и материалов в России.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Наша команда — это инженеры, дизайнеры и специалисты, которые сами используют технологии 
                3D печати в своей работе. Мы знаем о принтерах всё и готовы поделиться этими знаниями с вами.
              </p>
              <p className="text-lg leading-relaxed">
                Мы работаем напрямую с ведущими производителями оборудования, что позволяет нам предлагать 
                лучшие цены на рынке и гарантировать качество каждой единицы товара.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name={value.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 mb-20 border-2 border-primary/20">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={member.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{member.role}</h3>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-primary to-secondary border-0 shadow-2xl shadow-primary/30">
            <CardContent className="p-12">
              <Icon name="Lightbulb" size={48} className="text-white mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                Присоединяйтесь к нам!
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Станьте частью сообщества 3D энтузиастов. Мы всегда рады новым идеям и сотрудничеству
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
