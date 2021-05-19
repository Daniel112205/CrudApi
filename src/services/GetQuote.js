import axios from 'axios';
const baseUrl = 'https://prof-quotes.herokuapp.com/api/quotes';
const baseOption = 'https://prof-quotes.herokuapp.com/api/quotes/options';
export const GetQuote = () =>{
    const promise = axios(`${baseUrl}`, {
        method: 'GET'
    });
    return promise;
}
export const GetOptions = () => {
    const promise = axios(`${baseOption}`, {
        method: 'GET'
    });
    return promise;
}