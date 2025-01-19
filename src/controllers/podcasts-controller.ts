import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastDTOModel } from '../models/podcast-dto-model';


const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON }

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {

  const content: PodcastDTOModel = await serviceListEpisodes()

  // salva no header do response
  response.writeHead(content.statusCode, DEFAULT_CONTENT);
  // salva no content do response
  response.write(JSON.stringify(content.body))
  // finaliza
  response.end()
}

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {

  const content: PodcastDTOModel = await serviceFilterEpisodes(request.url)

  // salva no header do response
  response.writeHead(content.statusCode, DEFAULT_CONTENT);
  // salva no content do response
  response.write(JSON.stringify(content.body))
  // finaliza
  response.end()
}