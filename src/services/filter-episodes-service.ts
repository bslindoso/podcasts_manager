import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceFilterEpisodes = async (
  url: string | undefined
) => {

  const rawQueryString = url?.split("?p=")[1] || "";
  const queryString = decodeURIComponent(rawQueryString)

  const data = await repositoryPodcast(queryString);

  return data;
}