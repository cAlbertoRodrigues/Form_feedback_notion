import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


const NOTION_API_URL = "https://api.notion.com/v1/pages";
const NOTION_API_TOKEN = process.env.VITE_NOTION_API_TOKEN;
const NOTION_DATABASE_ID = process.env.VITE_NOTION_DATABASE_ID;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'POST',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const { nomeCompleto, email, feedback, rating } = req.body;

  const body = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "Name": {
        title: [
          {
            text: {
              content: nomeCompleto,
            },
          },
        ],
      },
      "Email": {
        email: email,
      },
      "Feedback Comments": {
        rich_text: [
          {
            text: {
              content: feedback,
            },
          },
        ],
      },
      "nota": {
        number: rating,
      },
    },
  };

  console.log('Corpo da requisição para o Notion:', body);

  try {
    const response = await axios.post(NOTION_API_URL, body, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
    });
    res.status(200).json({ message: 'Dados salvos no Notion', data: response.data });
  } catch (error) {
    console.error('Erro ao salvar no Notion:', error);
    if (error.response) {
      res.status(error.response.status).json({ 
        message: 'Erro ao salvar no Notion', 
        error: error.response.data 
      });
    } else {
      res.status(500).json({ 
        message: 'Erro interno no servidor', 
        error: error.message 
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
