import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.query)

    const users = [
        {name: 'Flavio', age: 39},
        {name: 'Juliana', age: 41},
        {name: 'Fernanda', age: 11},
        {name: 'Natalia', age: 8}        
    ]
    return response.json(users)
})

app.listen(3333);