export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bbf9d7c200mshaf9b9a5e512a3e9p1cbcc6jsn4f5364bf96a4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bbf9d7c200mshaf9b9a5e512a3e9p1cbcc6jsn4f5364bf96a4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}