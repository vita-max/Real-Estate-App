import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'X-RapidAPI-Key': '68459ce4f8msh8116f84fc3516f9p118c6fjsnfe85ce9db047',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '68459ce4f8msh8116f84fc3516f9p118c6fjsnfe85ce9db047',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }       
    });
    return data;
}




