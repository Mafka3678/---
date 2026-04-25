import { Search, MousePointer2, Share2, Bot, BarChart3, Layout } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Search className="w-7 h-7" />,
    title: 'Реклама в Поиске Яндекс',
    description: 'Контекстная реклама в самом популярном поисковике России. Горячие клиенты, готовые к покупке здесь и сейчас.',
  },
  {
    icon: <MousePointer2 className="w-7 h-7" />,
    title: 'РСЯ и ретаргетинг',
    description: 'Размещение текстово-графических объявлений на сайтах-партнерах. Показ разным сегментам целевой аудитории.',
  },
  {
    icon: <Share2 className="w-7 h-7" />,
    title: 'Реклама Вконтакте',
    description: 'Получение качественного трафика и заявок из крупнейшей социальной сети СНГ. Точный таргетинг на ваших клиентов.',
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: 'Продажи с чат-ботом',
    description: 'Чат-бот работает 24/7. Отвечает на вопросы, делает расчеты, бронирует время и создает ссылки на оплату без выходных.',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Интеграции и аналитика',
    description: 'Сквозная аналитика Roistat и внедрение CRM Битрикс24. Полный контроль воронки продаж и стоимости привлечения клиента.',
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: 'Посадочные страницы',
    description: 'Проектирование и разработка конверсионных лендингов. Тестируем гипотезы и анализируем эффективность каждого экрана.',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col w-full py-24">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4 block"
          >
            Наши возможности
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-primary mb-8"
          >
            Источники целевого трафика и заявок от клиентов
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant leading-relaxed"
          >
            Мы приводим вам клиентов по заданной цене. Работаем онлайн по всей России, внедряя только эффективные инструменты роста.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white signature-shadow rounded-[18px] p-8 flex flex-col items-start hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-on-surface-variant flex-grow leading-relaxed mb-8">{service.description}</p>
              <button className="inline-flex items-center text-primary font-semibold text-sm border-b border-primary/20 hover:border-primary transition-all">
                Подробнее <span className="ml-2">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-[1440px] mx-auto px-8 mt-32">
        <div className="bg-surface-container-high rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px]">
          <div className="p-12 lg:p-24 flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 leading-tight">Готовы масштабировать продажи?</h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              Оставьте заявку на бесплатную консультацию. Мы проанализируем ваш проект и предложим оптимальную стратегию продвижения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold hover:opacity-90 transition-all active:scale-[0.98]">
                Обсудить проект
              </button>
              <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold border border-zinc-200 hover:bg-zinc-50 transition-all active:scale-[0.98]">
                Заказать аудит
              </button>
            </div>
          </div>
          <div className="flex-1 min-h-[400px] relative">
            <img 
              alt="Office" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkYDXovqDk-0WvYJxNSFmyO9XoMLDhTAavj9g56kxdXGPIeIz8ikD9M98jjgm2z5EhjzjwGRznl5QR5sX1cMt6atabEqTotlkQUzPQ1rwCd8WVmZrrDL-xmlZtzg8XDoQwFmhNNUzm4VsLXOE7pnLZ-A6mKmKHINVundwQIVbSuj2RXrHm7nIYd32_qar3enPZ0k8ZozrUi8RxFoXBinuwFsIsSdYpRrWq8LdMtexl0ToQ0y1XwCzuyEa2e_-xZa-vtfioYogEps"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
