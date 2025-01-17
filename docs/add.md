# Podcast Manager

### Descrição

Um app ao estilo Netflix, onde ue possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio da aplicação

Podcasts feitos em vídeo

### Features

- Listar os episódios em sessões de categorias
  - [saúde, fitness, mentalidade, humor, ...]
- Filtrar episódios por nome de podcast

## Como

#### Feature
  
Listar os episódios em sessões de categorias

### Como vou implementar
  
Vou retornar em uma API Rest (JSON) o nome do podcast, nome do episódio, imagem de capa, link, categoria

GET: retorna lista de episódios

response:
```js
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "5DaLlqP-8uI",
    "cover": "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=5DaLlqP-8uI",
    "category": [
      "saúde",
      "fitness",
      "esporte",
      "bodybuilding"
    ]
  },
  {
    "podcastName": "Flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "hhttps://www.youtube.com/watch?v=4KDGTdiOV4I",
    "category": [
      "esporte",
      "corrida"
    ]
  },
  {
    "podcastName": "Inteligência Ltda.",
    "episode": "BRUNO LINDOSO #999",
    "videoId": "&DGD&GDHD",
    "cover": "https://i.ytimg.com/vi/&DGD&GDHD/maxresdefault.jpg",
    "link": "hhttps://www.youtube.com/watch?v=&DGD&GDHD",
    "category": [
      "programacao",
      "javascript"
    ]
  }
]
```

GET: retorna lista de episódios baseado em um parâmetro enviado pelo cliente com o nome do podcast