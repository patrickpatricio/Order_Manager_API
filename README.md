# Order Manager API
### Esta é uma API desenvolvida em Node.js para o gerenciamento de pedidos. A aplicação realiza o mapeamento de dados de entrada (JSON em português) para um formato padronizado de saída (JSON em inglês) e persiste as informações em um banco de dados MongoDB Atlas.

## Funcionalidades
  - Criação de Pedidos: Recebe dados de pedidos e realiza o mapping dos campos antes de salvar;
  - Busca por ID: Recupera os dados de um pedido específico através do orderId;
  - Listagem: Lista todos os pedidos cadastrados no banco;
  - Atualização: Permite atualizar dados de um pedido existente;
  - Exclusão: Remove um pedido do banco de dados;

## Tecnologias Utilizadas
  - Runtime: Node.js;
  - Framework: Express;
  - Banco de Dados: MongoDB Atlas (NoSQL);
  - ODM: Mongoose (para modelagem e validação de dados);
  - Variáveis de Ambiente: Dotenv (proteção de credenciais);

## Pré-requisitos
 - Node.js (v14 ou superior);

## Instalação e Configuração

* **Clone o repositório:**
  ```bash
  git clone [https://github.com/patrickpatricio/Order_Manager_API.git](https://github.com/patrickpatricio/Order_Manager_API.git)
  cd Order_Manager_API
  ```
* **Instale as dependências:**
    ```bash
    npm install
* **Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto e adicione sua string de conexão do MongoDB:**
  ```bash
    PORT=3000MONGODB_URI=mongodb+srv://USUARIO:SENHA@cluster0.mongodb.net/jitterbit
* **Inicie o servidor:**
  ```bash
    node server.js
