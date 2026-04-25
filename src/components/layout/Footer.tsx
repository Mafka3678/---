const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-zinc-100 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1440px] mx-auto gap-8">
        <div className="text-zinc-900 font-bold uppercase tracking-tighter">Чат Ботаник</div>
        <div className="flex gap-8">
          <a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Приватность</a>
          <a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Условия</a>
          <a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Контакты</a>
          <a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Telegram</a>
        </div>
        <p className="text-xs uppercase tracking-widest text-zinc-400 text-center md:text-right">
          © 2024 Чат Ботаник. Осознанный минимализм для современных брендов.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
