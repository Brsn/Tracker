import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

/* via the npm documentation
export const fetchData = () => {
    Axios.get(url).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
    })
}
*/

export const fetchData = async () => {
    try {
        //destructoring
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(url);


        /*const modifiedData = {
            confirm: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        } */
        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate,
        }
        return modifiedData;
        //or no object necessary
        //return {confirmed, recovered, deaths, lastUpdate}
    }
    catch (error) {
        console.log(error);
    }
}