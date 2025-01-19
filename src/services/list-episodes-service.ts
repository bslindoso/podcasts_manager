import { PodcastDTOModel } from "../models/podcast-dto-model"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<PodcastDTOModel> => {

  // buscando os dados
  const data = await repositoryPodcast()

  // define a interface de retorno
  let responseFormat: PodcastDTOModel = {
    statusCode: 0,
    body: []
  }

  // verifica o tipo de resposta
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
  }

  return responseFormat
}