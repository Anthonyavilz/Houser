module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_Houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                console.log(err)
                res.status(500).send(err);
            });
    },
    createHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;
    
        dbInstance.create_Houses([name, address, city, state, zipcode])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
      deleteHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_Houses(id)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      }
}