import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api'


Axios.get(url).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
}).finally(function () {

});