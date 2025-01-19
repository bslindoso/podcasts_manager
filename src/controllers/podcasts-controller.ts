import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {

  const content = await serviceListEpisodes()

  // salva no header do response
  response.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
  // salva no content do response
  response.end(
    JSON.stringify(content)
  )
}

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {

  const content = await serviceFilterEpisodes(request.url)

  // salva no header do response
  response.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
  // salva no content do response
  response.end(
    JSON.stringify(content)
  )
}