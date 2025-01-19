import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { PodcastDTOModel } from "../models/podcast-dto-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  url: string | undefined
): Promise<PodcastDTOModel> => {

  // buscando os dados
  const rawQueryString = url?.split("?p=")[1] || "";
  const queryString = decodeURIComponent(rawQueryString)
  const data = await repositoryPodcast(queryString);

  // define a interface de retorno
  let responseFormat: PodcastDTOModel = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT, // verifica se tem conteúdo
    body: data
  }

  return responseFormat;
}