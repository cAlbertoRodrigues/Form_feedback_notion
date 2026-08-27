## Descrição

**FORM_FEEDBACK_NOTION** é uma aplicação web projetada para coletar feedback dos usuários de forma simples e eficaz. Desenvolvida com a biblioteca React para o frontend e Express para o backend, esta aplicação permite que os usuários enviem suas opiniões e avaliações através de um formulário intuitivo e responsivo.

Com um design moderno, a aplicação proporciona uma experiência de usuário agradável, facilitando o envio de feedbacks. Utilizando Formik para gerenciar o formulário, garantimos que a coleta de dados seja fluida e que os usuários possam facilmente submeter suas opiniões. A validação de entradas é feita com a biblioteca Yup, assegurando que todos os campos sejam preenchidos corretamente antes do envio.

Uma das principais características do **FORM_FEEDBACK_NOTION** é sua integração com o Notion. Após o envio, os feedbacks são organizados e armazenados, permitindo que as equipes analisem as opiniões dos usuários de maneira eficiente e visual. Essa funcionalidade é especialmente útil para equipes de desenvolvimento e gerenciamento de produtos que buscam aprimorar seus serviços com base nas sugestões dos usuários.

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Formik
  - Axios
  - Styled-components
  - Vite
  - Yup

- **Backend:**
  - Express
  - Node.js

## Pré-requisitos

Antes de executar o projeto, você precisa ter o seguinte instalado:

- Node.js (v16 ou superior)
- npm ou Yarn
 
## Utilizando

 ## Como Executar

 Para iniciar o servidor localmente, abra o terminal e execute o seguinte comando:

  --bash
  node server.js

Em seguida, inicie o frontend e o backend utilizando o Yarn:

--bash
yarn dev

Certifique-se de adicionar a chave da API e o ID do banco de dados do Notion no arquivo .env com o seguinte formato:

VITE_NOTION_API_TOKEN=seu_token_de_integracao
VITE_NOTION_DATABASE_ID=sua_id_do_banco_de_dados

Após iniciar os serviços, abra seu navegador e acesse http://localhost:5174 para visualizar o formulário de feedback. 
Preencha o formulário com suas informações e envie seu feedback. Os dados serão automaticamente enviados e armazenados no Notion, prontos para análise.
