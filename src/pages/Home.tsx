import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ChatInterface from '../components/chat/ChatInterface';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-8 overflow-hidden bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-surface-container-low/50 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-surface-container-low/30 blur-[100px]"></div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-surface-container rounded-full mb-8"
          >
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Переосмысление цифровых показателей</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold text-primary max-w-[900px] mb-6 leading-[1.1] tracking-tight"
          >
            Только заявки. Ничего лишнего.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary max-w-[640px] mb-12 leading-relaxed"
          >
            Мы только приводим клиентов. Работаем онлайн по всей России.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-black/5 active:scale-[0.98]">
              Начать проект
            </button>
            <Link to="/cases" className="flex items-center gap-2 px-10 py-5 text-primary font-medium hover:underline decoration-1 underline-offset-4">
              Наши кейсы
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-24 w-full max-w-[1000px] aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white relative group"
          >
            <img 
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnZSZoGzbtvbfTnrgH8P0QgayulMQgJTppgyQ89BGRzuzfOjCeRSwTKedg4ZW3jH2h4hJBD-h5vUXoigGESjXAQrozYNqbXcnEXZulK74TQkyhofhY0LkignWlrbjcfz-lrk2epvfTlkOY5PYRIPqfDLYFG6KmM92btBPKcmK4gGqxV3hav4JD0VuWhWZ-H8bFKI0WKfFpqpxFVAccxbZFStyAqCP1xWRKtsv7OzrvCYEvqmjhr0V6ocaTa21f5InSSsY9paQs6pw"
              alt="Workspace"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-card p-8 rounded-xl border border-white/50 flex justify-between items-center">
              <div className="text-left">
                <p className="text-xs font-semibold text-primary uppercase mb-1">Текущая стратегия</p>
                <p className="text-2xl font-bold text-primary">+214% лид-велосити</p>
              </div>
              <div className="hidden md:flex gap-8">
                <div className="text-center">
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">Эффективность</p>
                  <p className="text-lg font-bold">98.4%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">Охват</p>
                  <p className="text-lg font-bold">2.4M</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-[500px]">
              <h2 className="text-5xl font-bold text-primary mb-4 leading-tight">Наши преимущества</h2>
              <p className="text-lg text-secondary">Проверенный фреймворк для брендов, которым нужны исключительные результаты и предсказуемое масштабирование.</p>
            </div>
            <div className="pb-2">
              <span className="text-sm font-semibold uppercase tracking-widest border-b-2 border-primary pb-2">Методология Чат Ботаник</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-[18px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-container-high hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">24 часа</h3>
              <p className="text-secondary leading-relaxed">
                время анализа ниши и формирования коммерческого предложения для вашего бизнеса.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-[18px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-container-high hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">30 000 руб.</h3>
              <p className="text-secondary leading-relaxed">
                минимальный рекламный бюджет в месяц для запуска эффективных кампаний.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-[18px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-container-high hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">0 руб.</h3>
              <p className="text-secondary leading-relaxed">
                аудит вашей текущей рекламы. Найдем точки роста и устраним неэффективные расходы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Chat Section */}
      <section className="py-32 px-8 bg-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-surface-container rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <Zap className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-5xl font-bold text-primary mb-6 tracking-tight">Попробуйте наш демо-чат</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Наш ИИ-бот расскажет, как мы достигаем высокой конверсии, защищаем от фродовых лидов и снижаем стоимость привлечения клиента. Задайте любой вопрос!
          </p>
        </div>
        <ChatInterface embedded={true} />
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8 bg-surface-container text-center">
        <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Готовы к масштабированию?</h2>
        <button className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/5">
          Запросить бесплатный аудит
        </button>
      </section>
    </div>
  );
};

export default Home;

