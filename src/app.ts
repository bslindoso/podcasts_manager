import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  // query string

  // Divide a URL em duas partes usando "?" como separador: baseUrl contém o caminho base e queryString contém os parâmetros
  // Exemplo: para "http://localhost:3333/api/episode?p=flow" -> baseUrl = "/api/episode" e queryString = "p=flow"
  const baseUrl = request.url?.split("?")[0] ?? [""];

  // listar podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  // filtrar podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.PODCASTS) {
    await getFilterEpisodes(request, response);
  }
}