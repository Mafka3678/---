import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const cases = [
  {
    type: 'IT-сектор',
    title: 'Lumina Digital Infrastructure',
    description: 'Глобальная лидогенерация и обновление идентичности для SaaS-лидера.',
    stat: '+214%',
    statLabel: 'Lead Velocity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV-PgKJXz-c5DeIfIKe8Is-7Ltn91xNOZQrTdsN0nBFCZrhZCqmtvZkDdR_9oUEYcPKhMAGv5qinVTOkUS76s0feqaXiBE0UM6KrVM8xPbkZSn5Zh6i0rnCzYcgnCQvwtcDB1WbKatTnJ0-HedkroUInYuQd83TrRi4-OfvcmS8WgzHD6QzXugBbLxed-ML2sa0hy4L3L55_oDTjvpGcGjs5EBS_OQLO8_M78kyUAGj9t7E-E8dM_taOhMiDfhz0qElbsf4ElGO6k',
    size: 'wide',
  },
  {
    type: 'Ритейл',
    title: 'Oria Collective',
    stat: '3.4x',
    statLabel: 'ROAS increase',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE2WJ7NBwyGkS77vt4Ir5Zt0FY_1nVTdvBSsjpDkicc1FbH2eWG_rESd_P-bHiP9GAAeBuPOuV7b5GkZLBlxbZwyYberiZccoThSfAP2nvPldm4ZmS2_GcL92eYRvGy-EJ38aTgknxdOGzVZsiyOMYF7eeST0rIzSLZJWVuFzfE7QHIimTl5Fp61FrWe6sg2NN0aFmZkQ-NCoecADGJ1FbRhPtLiuBP6qXTpQIevGxUvDdVrBBoZ0kJa9vFBHuX431waexWfsZCsA',
    size: 'tall',
  },
  {
    title: 'Vertex Partners',
    stat: '+88%',
    statLabel: 'Retention',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClkJtJSgX-37YYAwE_n7Xh8haEPDLck3CW-e7CmQZS_miXUlp3hKq6b84GudHgggvNwN2C0hMNZXB6kNsoL2ybkNt1__WdmvLImIXPL3eneDxIlOLTljcjifRMG6hJ9ugxz9CBO5RqmriztfepQIcnRiryW_I9I0gxx_uFwzW0i9LorCWeC7U1In3L4DZOo9t6yCKo6U0t5Ov8SLhQ-BHrHCbo4LmpyElVygWE2o9L2eXI8SL4t_Sl6xhxWZ-j_6EtHPptTY_J5A0',
    size: 'square',
  },
  {
    title: 'Aeon Timepieces',
    stat: '12k',
    statLabel: 'Предзаказов',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq1SzgxAlEXF4rd0OauYjWJ9YbznOO7SuNvfjeVtb0A27EOKnMRyKGFqJ9-dm3GKFiZ0wmjrYY-PEGK_VyRytUvbUnrzVmmRI9zlRn0lwoUfW-td7wANv73sfpjaP2PjSPt-968tRmU9rAlso6w4K-Ujrd-OFkbO8-BS91zoAD84C0_H9lmTZmHW4Gnguc4NPmvGIwurAx-D97I9beQrcCo2JDBp-RoTdMmh-KSkYfRvsl2eq9FNVW1aO5ALVJ_BRKDb5KevsgJAw',
    size: 'square',
  },
  {
    title: 'Nova Cloud',
    stat: '2.1s',
    statLabel: 'Оптимизация',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDTN3joZ3aWSCcN41RCIS53-RR7cNxPRtMPuoRQ-FSPmZR2elGVXcFi6V6UZ-JKpNW2RTbfqC4LdaIKMucsZ6Fhqr-JzJpH88Z58u1pPtXVAQcL9MFcHo4gxKoRH2_BSfYFD9eoQ1-oxmUqBYe8GndEJkQM1z44IP0NDKcx67OnkGndwihRMxJ05eZllHjbWyQkoQVEpteKkkvK6IXzDMnyfUbdfPH8y57YJjWEpqIgafpR644s12Xf32V4S4UlglVMrWAFtjx97w',
    size: 'square',
  },
];

const Cases = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-32 hero-gradient px-8">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">Подтвержденная эффективность</span>
          <h1 className="text-6xl md:text-7xl font-bold text-primary max-w-4xl mx-auto mb-8 tracking-tighter">Кейсы и результаты</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">Мы не просто запускаем рекламу; мы проектируем результат. Ознакомьтесь с нашими решениями, которые меняют правила игры.</p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="pb-32 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Case */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] bg-white signature-shadow">
              <img 
                src={cases[0].image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={cases[0].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-sm font-semibold uppercase tracking-widest mb-2 block opacity-80">{cases[0].type}</span>
                <h3 className="text-4xl font-bold">{cases[0].title}</h3>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <p className="text-lg text-secondary">{cases[0].description}</p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-bold text-primary tracking-tighter">{cases[0].stat}</span>
                <span className="block text-xs font-semibold uppercase text-secondary tracking-widest mt-1">{cases[0].statLabel}</span>
              </div>
            </div>
          </div>

          {/* Tall Case */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="relative aspect-[4/5] h-full overflow-hidden rounded-[12px] bg-white signature-shadow">
              <img 
                src={cases[1].image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={cases[1].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-sm font-semibold uppercase tracking-widest mb-2 block opacity-80">{cases[1].type}</span>
                <h3 className="text-4xl font-bold">{cases[1].title}</h3>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-end">
                <span className="text-5xl font-bold text-primary tracking-tighter">{cases[1].stat}</span>
                <span className="text-xs font-semibold uppercase text-secondary pb-2 tracking-widest">{cases[1].statLabel}</span>
              </div>
            </div>
          </div>

          {/* Three Small Cases */}
          {cases.slice(2).map((item, idx) => (
            <div key={idx} className="md:col-span-4 group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[12px] bg-white signature-shadow">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary tracking-tighter">{item.stat}</span>
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-lowest py-32 border-y border-zinc-100 px-8">
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-7xl font-bold text-primary mb-4 tracking-tighter">94%</div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Удержание клиентов</p>
            </div>
            <div className="p-8">
              <div className="text-7xl font-bold text-primary mb-4 tracking-tighter">2B+</div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Освоенный бюджет</p>
            </div>
            <div className="p-8">
              <div className="text-7xl font-bold text-primary mb-4 tracking-tighter">180</div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Мировых рынков</p>
            </div>
            <div className="p-8">
              <div className="text-7xl font-bold text-primary mb-4 tracking-tighter">2x</div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Средний рост</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-primary mb-8 leading-[1.2] tracking-tighter">ROI стратегического минимализма.</h2>
              <p className="text-xl text-secondary mb-12 leading-relaxed">
                Мы убираем всё лишнее, чтобы найти основной драйвер роста вашего бренда. Наши результаты — это не просто цифры, это устойчивый сдвиг в позиционировании на рынке.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">Оптимизация конверсии (в ср. +45%)</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">Лояльность к бренду (+62%)</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">Снижение стоимости привлечения (-30%)</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white rounded-[24px] p-12 signature-shadow border border-zinc-50">
                <div className="flex justify-between items-center mb-12">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Тренд эффективности</h4>
                  <span className="text-xs font-medium text-secondary">За 12 месяцев</span>
                </div>
                <div className="h-64 flex items-end gap-2 px-2">
                  {[20, 35, 30, 55, 70, 60, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className={`flex-1 rounded-t-[4px] ${i === 7 ? 'bg-primary' : 'bg-zinc-100 opacity-' + (100 - (7-i) * 10)}`}
                      style={{ opacity: i === 7 ? 1 : 0.1 + (i * 0.1) }}
                    />
                  ))}
                </div>
                <div className="mt-12 pt-12 border-t border-zinc-100 flex justify-between">
                  <div>
                    <span className="block text-3xl font-bold text-primary tracking-tighter">412%</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-1 block">Yearly Upside</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-bold text-primary tracking-tighter">0%</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-1 block">Churn Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
