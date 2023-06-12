import axios from "axios";

const swapiGetter = (id) => axios.get(`https://swapi.dev/api/people/${id}/`).then((res) => res.data.name);
console.log(`CALL API : ${await swapiGetter(1)}`) // Luke Skywalker
console.log(`CALL API : ${await swapiGetter(2)}`) // C-3PO
console.log(`CALL API : ${await swapiGetter(3)}`) // R2-D2