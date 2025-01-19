export const generateDynamicLinks = (videoId: string) => {
  const baseCoverUrl = "https://i.ytimg.com/vi"
  const baseLinkUrl = "https://www.youtube.com/watch?v"
  const resolution = "maxresdefault"

  return {
    cover: `${baseCoverUrl}/${videoId}/${resolution}.jpg`,
    link: `${baseLinkUrl}=${videoId}`
  }
}
