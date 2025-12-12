const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.delete('/delnoticias', async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id)
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({_id: id})
            res.status(200).json({ status: 1, msg: "Notícia apagada com sucesso" })
        } catch (error) {
            res.status(400).json({ status: 0, msg: "Erro ao apagar notícia" })
        }
    })

}


