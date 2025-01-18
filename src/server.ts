import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'

// Inicia o servidor HTTP na porta definida no ambiente e exibe mensagem no console quando estiver pronto
const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // query string
    // http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    console.log(baseUrl, queryString)

    // listar podcasts
    if (req.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(req, res);
    }

    // filtrar podcasts
    if (req.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT

server.listen(port, () => console.log("Servidor iniciado na porta " + port)
);