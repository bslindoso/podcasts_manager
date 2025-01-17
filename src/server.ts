import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts-controller'

// Inicia o servidor HTTP na porta definida no ambiente e exibe mensagem no console quando estiver pronto
const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req, res);
    }
  }
);

const port = process.env.PORT

server.listen(port, () => console.log("Servidor iniciado na porta " + port)
);