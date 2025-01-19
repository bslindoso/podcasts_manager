import * as http from 'http';
import { app } from './app';

// Inicia o servidor HTTP na porta definida no ambiente e exibe mensagem no console quando estiver pronto
const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () =>
  console.log("Servidor iniciado na porta " + port)
);