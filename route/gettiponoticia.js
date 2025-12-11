module.exports = (app) => {
    app.get('/noticias/tiponoticia/:tipo', async (req, res) => {
        try {
            const tipo = req.params.tipo
            await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find({ tiponoticia: new RegExp(tipo,'i')}).toArray();
            res.json(noticias)
        } finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }
    })
}