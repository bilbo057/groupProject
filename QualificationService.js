import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://database-b4a4.restdb.io/rest/workers'; 
const API_KEY = 'dd93015103c7db7a57c37ff601c0659439334';

export function getWorker() {
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': API_KEY
            }
        }
    )
    .then(response => response.json())
    .then(worker => worker.map(item => ({
        ...item,
        date: moment(item.date, "DD/MM/YYYY HH:mm").toDate(),
    })));
}