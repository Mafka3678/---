import { Search, MousePointer2, Palette, Bolt, Share2, MoreHorizontal, PlusCircle, Send, Check, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

// Mock Component for missing Lucide icon if needed, but the others are fine.
const Insights = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

const consultants = [
  { id: 'seo', name: 'Специалист по SEO', icon: <Search className="w-5 h-5" />, active: true },
  { id: 'ppc', name: 'PPC Менеджер', icon: <MousePointer2 className="w-5 h-5" />, active: false },
  { id: 'strategist', name: 'Стратег', icon: <Insights className="w-5 h-5" />, active: false },
  { id: 'creative', name: 'Креативный директор', icon: <Palette className="w-5 h-5" />, active: false },
];

type MessageStatus = 'sent' | 'delivered' | 'read';

interface Message {
  id: number;
  role: 'bot' | 'user';
  content: string;
  time: string;
  hasData?: boolean;
  status?: MessageStatus;
}

const TypingIndicator = () => (
  <div className="flex gap-2 p-3 bg-surface-container-low border border-surface-container rounded-2xl rounded-tl-none w-fit">
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      content: 'Привет! Я ваш ассистент Чат Ботаник. Я проанализировал текущие показатели вашего домена. Хотели бы вы увидеть анализ пробелов в ключевых словах или наш прогноз стратегии на четвертый квартал?',
      time: '10:24',
    },
    {
      id: 2,
      role: 'user',
      content: 'Давайте начнем со стратегии на четвертый квартал. Меня особенно интересует, как мы можем использовать новые креативные активы для увеличения органического охвата.',
      time: '10:26',
      status: 'read'
    },
    {
      id: 3,
      role: 'bot',
      content: 'Понял вас. Вот краткий обзор нашей дорожной карты на четвертый квартал с учетом нового визуального языка.',
      time: '10:27',
      hasData: true,
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessageId = messages.length + 1;
    const newMessage: Message = {
      id: userMessageId,
      role: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate message pipeline
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMessageId ? { ...m, status: 'delivered' } : m));
    }, 1000);

    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMessageId ? { ...m, status: 'read' } : m));
      setIsBotTyping(true);
    }, 2000);

    // Simulate bot response
    setTimeout(() => {
      setIsBotTyping(false);
      const botMessage: Message = {
        id: messages.length + 2,
        role: 'bot',
        content: `Интересный вопрос! Мы можем внедрить ${inputValue.toLowerCase().includes('стратег') ? 'стратегические' : 'новые'} решения в контент-план. Для креативов мы подготовили сетку A/B тестирования.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 4500);
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-64px)] bg-surface py-8 px-4 md:px-8">
      <div className="w-full max-w-[1200px] mx-auto h-full bg-white rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-container flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-72 bg-surface-container-low border-r border-surface-container flex flex-col p-6 hidden lg:flex">
          <div className="mb-10">
            <h2 className="text-xl font-bold tracking-tight text-primary mb-2">Nexus Brain</h2>
            <p className="text-secondary text-sm">Специализированные ИИ-консультанты</p>
          </div>
          
          <nav className="space-y-2 flex-1">
            {consultants.map((c) => (
              <button 
                key={c.id}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left ${
                  c.active ? 'bg-white shadow-sm border border-surface-container text-primary' : 'hover:bg-surface-container-high text-secondary'
                }`}
              >
                {c.icon}
                <span className="text-sm font-medium">{c.name}</span>
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-dim overflow-hidden grayscale">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6MTjv6qP5Bo2JwbTviVh25HZ9jRcpcQsunSLPJv795hV3EGDW45h_kA9Nf4nvuy82ft7HE1HPVg2xy5uhYk3dyPjXQwyYr5uJ66IUrIvc37Vw9oETK_yoPhpN5X7LW9ixeq2JcoxrPtMmD9KqRsu3MGKztsyzp-RIsCnF35Zfe8hkaHAPSq1eLTDj7n-8SgeNpeG3Fpg2-5taQvE1uzcjmJdApQQN3E_7CBcpW655H0b10pfodRAMAgth5QSX2q1Zl57nglx0uZs" alt="User" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Алекс Мерсер</p>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Pro Аккаунт</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 flex flex-col relative bg-white min-w-0">
          {/* Header */}
          <header className="px-8 py-5 border-b border-surface-container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="lg:hidden text-primary">
                <button className="p-2 -ml-2"><Bolt className="w-6 h-6" /></button>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-[16px] text-primary">Консультация с Чат Ботаник</h3>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className={`w-2 h-2 rounded-full ${isBotTyping ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-500'}`}></span>
                  <span className="text-[12px] text-on-surface-variant font-bold">
                    {isBotTyping ? 'Печатает...' : 'ИИ Активен'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors"><Share2 className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
          </header>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
            <div className="flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-surface-container text-on-secondary-container text-[11px] font-bold uppercase tracking-widest">Сегодня</span>
            </div>

            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div 
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse ml-auto' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${
                    message.role === 'bot' ? 'bg-primary text-white' : 'bg-surface-dim border border-surface-container grayscale'
                  }`}>
                    {message.role === 'bot' ? (
                      <Bolt className="w-4 h-4 fill-white" />
                    ) : (
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgggNLwDwrihElj4c_DuUwHC2699ck-XU2B6SzlRIhZg8haNZVmICdfXQbxrT1MqXFtu7n3h0wj_c38FsHLLXkzDK432C0qd-F56-Zx9vUJuLFeMRMr1B0psCqBA17TIYcsIsRuGKv7n2A9YyPt8bt7rnr_RgjA-5cjE4b_4vX4L0KM4HT02FJvu3A1TQ3UIJZmg39DGsxNNxv72UvWAXWqcUBwDq_-M7r8Bfn1woUI6sgpGSMGfksnOKO_Kfqw4lRf9l8Vp6Rc8" alt="Bot" />
                    )}
                  </div>
                  <div className={`space-y-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`p-4 rounded-2xl ${
                      message.role === 'bot' 
                        ? 'bg-surface-container-low border border-surface-container rounded-tl-none text-primary' 
                        : 'bg-primary text-white rounded-tr-none text-left shadow-lg'
                    }`}>
                      <p className="text-[15px] leading-relaxed font-medium">{message.content}</p>
                    </div>

                    {message.hasData && (
                      <div className="bg-white border border-surface-container rounded-2xl p-6 shadow-sm space-y-4 max-w-sm mt-4 text-left">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-bold text-primary uppercase tracking-tight">Траектория роста (Q4)</h4>
                          <span className="text-emerald-600 font-bold text-sm">+24%</span>
                        </div>
                        <div className="h-16 w-full flex items-end gap-1 px-1">
                          {[30, 45, 40, 65, 90].map((h, i) => (
                            <div key={i} className={`flex-1 rounded-t-[2px] ${i === 4 ? 'bg-primary' : 'bg-surface-dim'}`} style={{ height: `${h}%` }} />
                          ))}
                        </div>
                        <button className="w-full py-2.5 bg-surface-container-low hover:bg-surface-container text-primary rounded-lg text-xs font-bold transition-colors uppercase tracking-widest">
                          Посмотреть всю дорожную карту
                        </button>
                      </div>
                    )}
                    
                    <div className={`flex items-center gap-1.5 px-1 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-[10px] text-on-surface-variant font-medium opacity-60">{message.time}</span>
                      {message.role === 'user' && message.status && (
                        <span className="text-on-surface-variant">
                          {message.status === 'sent' && <Check className="w-3 h-3 opacity-40" />}
                          {message.status === 'delivered' && <CheckCheck className="w-3 h-3 opacity-40" />}
                          {message.status === 'read' && <CheckCheck className="w-3 h-3 text-emerald-500" />}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isBotTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4 max-w-[85%]"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary text-white">
                    <Bolt className="w-4 h-4 fill-white" />
                  </div>
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <footer className="p-6 bg-white border-t border-surface-container">
            <div className="max-w-[800px] mx-auto relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <PlusCircle className="w-5 h-5" />
                </button>
              </div>
              <input 
                className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-16 text-[15px] font-medium focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-secondary/50" 
                placeholder="Опишите ваши цели..." 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-md active:scale-95 transition-transform"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-center text-[11px] text-on-surface-variant mt-3 uppercase tracking-[0.2em] font-bold">Модель Nexus Strategy AI v2.5</p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Chat;
