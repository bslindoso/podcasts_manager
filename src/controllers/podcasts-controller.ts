import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceListEpisodes()

  // salva no header do response
  res.writeHead(200, { 'Content-Type': 'application/json' });
  // salva no content do response
  res.end(
    JSON.stringify(content)
  )
}