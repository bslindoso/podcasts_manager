import { PodcastModel } from "./podcast-model";

export interface PodcastDTOModel {
  statusCode: number,
  body: PodcastModel[]
}