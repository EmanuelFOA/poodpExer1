const express = require('express');
const app = express();

const techs = ['NodeJS', 'ReactJS', 'React Native', 'Vue', 'Angular'];

// http://localhost:3333/materias/1

app.get('/materias/:indice', (request, response) => {
  const { indice } = request.params;
  console.log(techs.length);

  if (indice >= 0 && indice < techs.length) {
    return response.json({ techs: `${techs[indice]}` });
  } else {
    return response.json({ message: 'Tecnologia Inexistente !!' });
  }
});