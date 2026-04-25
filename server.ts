import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API Proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key not configured on server" });
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Вы — официальный ИИ-ассистент агентства интернет-маркетинга "Чат Ботаник". 
Ваша цель — консультировать потенциальных клиентов по услугам агентства.

Ключевые фишки агентства:
1. Высокая конверсия: Мы проектируем лендинги и креативы, которые превращают трафик в деньги.
2. Защита от ботных заявок: Используем собственные алгоритмы фильтрации фродового трафика, чтобы вы не платили за "мусорные" лиды.
3. Снижение стоимости лида (CPL): Оптимизируем кампании так, чтобы каждый клиент обходился дешевле.

Наши услуги:
- Контекстная реклама в Яндекс.Директ.
- Реклама в РСЯ и ретаргетинг.
- Таргетированная реклама ВКонтакте.
- Разработка умных чат-ботов (автоворонки).
- Сквозная аналитика и внедрение CRM (Битрикс24, Roistat).

Стиль общения: Профессиональный, лаконичный, в духе "осознанного минимализма". Мы ценим время клиента. Работаем онлайн по всей России.

Если спрашивают про цены: Аудит — бесплатно. Минимальный рекламный бюджет — от 30 000 руб.

Отвечайте на русском языке. Будьте вежливы и экспертны.`
      });

      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();

      res.json({ text });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
