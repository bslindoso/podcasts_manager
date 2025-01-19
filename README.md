# Podcast Manager

### Descrição
Um app ao estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categoria.

### Domínio da aplicação
Podcasts feitos em vídeo.

## Features
- Listar os episódios em sessões de categorias:
  - [saúde, fitness, mentalidade, humor, ...]
- Filtrar episódios por nome de podcast.

---

## Como Funciona

### Listar Episódios em Sessões de Categorias
A aplicação fornece uma API Rest que retorna os episódios, organizados por categoria, com os seguintes dados:
- Nome do podcast
- Nome do episódio
- Imagem de capa
- Link
- Categoria(s)

#### Endpoint
`GET /api/lista`

##### Response Example:
```json
[
  {
    "podcastName": "flow",
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
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "category": [
      "esporte",
      "corrida"
    ]
  },
  {
    "podcastName": "venus",
    "episode": "Dra. ANA BEATRIZ BARBOSA (Especial Mês das Mulheres) - Venus Podcast #236",
    "videoId": "NOsZr-Pz6yg",
    "cover": "https://i.ytimg.com/vi/NOsZr-Pz6yg/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=NOsZr-Pz6yg",
    "category": [
      "saúde",
      "psicologia"
    ]
  }
]
```

### Filtrar Episódios por Nome de Podcast
O cliente pode enviar o nome do podcast como parâmetro para buscar episódios relacionados.

#### Endpoint
`GET /api/podcasts?p={nome}`

##### Response Example:
Similar ao exemplo acima, mas filtrado de acordo com o parâmetro enviado.

---

## Estrutura do Projeto

```
PODCASTS_MANAGER
├── docs
│   ├── architecture
│   │   └── add.md
│   └── node-documentation.txt
├── src
│   ├── controllers
│   │   └── podcasts-controller.ts
│   ├── models
│   │   ├── podcast-dto-model.ts
│   │   └── podcast-model.ts
│   ├── repositories
│   │   ├── podcast-repository.ts
│   │   └── podcasts.json
│   ├── routes
│   │   └── routes.ts
│   ├── services
│   │   ├── filter-episodes-service.ts
│   │   ├── generate-links-service.ts
│   │   └── list-episodes-service.ts
│   ├── utils
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

## Inicialização do Projeto

### Requisitos
- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Instalação
1. Clone o repositório:
```bash
$ git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:
```bash
$ npm install
```

### Rodar o Servidor
```bash
$ npm start
```
O servidor ficará disponível em `http://localhost:3333`.

---

## Observações
- Certifique-se de configurar o arquivo `.env` corretamente antes de iniciar o servidor.
- Utilize o arquivo `podcasts.json` para gerenciar os dados baseados em podcasts.

---
