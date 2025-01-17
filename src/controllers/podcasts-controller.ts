import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  // salva no header do response
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // salva no content do response
  res.end(
    JSON.stringify([
      {
        podcastName: "Flow Podcast",
        episode: "CBUM - Flow #319",
        videoId: "5DaLlqP-8uI",
        cover: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=5DaLlqP-8uI",
        category: ["saúde", "fitness", "esporte", "bodybuilding"]
      },
      {
        podcastName: "Flow Podcast",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "hhttps://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["esporte", "corrida"]
      },
    ])
  )
}