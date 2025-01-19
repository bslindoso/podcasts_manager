import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'
import { generateDynamicLinks } from '../services/generate-links-service'

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {

  const language = "utf-8"
  const rawData = fs.readFileSync(pathData, language)
  let jsonFile = JSON.parse(rawData)

  // Filtra pelo nome do podcast (se especificado)
  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  // Adiciona os campos `cover` e `link` dinamicamente usando `generateDynamicLinks`
  const enrichedPodcasts = jsonFile.map((podcast: PodcastModel) => {
    const { cover, link } = generateDynamicLinks(podcast.videoId) // Gera os links dinâmicos
    return { ...podcast, cover, link }
  })

  return enrichedPodcasts
}