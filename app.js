import express from 'express';

const app = express ()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em http://tarefas:${port}`)
})

app.get('/',(req, res)=> {
    res.send('<h1>Rota ativada com GET e recurso tarefas: valores de tarefas serão retornados</h1>')
});
export default app