export const getGits = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZTn32DZsQHhOyBFFxYeqh5PGeDodPV1N&q=${category}&limit=5`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gits = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }));
  
  return gits;

}