import * as http from 'http';

// Importa o módulo HTTP nativo do Node.js para criar o servidor
const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {

  }
);

// Inicia o servidor HTTP na porta 3333 e exibe mensagem no console quando estiver pronto
server.listen(3333, () => console.log("Servidor iniciado na porta 3333")
);