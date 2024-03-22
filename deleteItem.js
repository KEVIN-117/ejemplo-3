const db = require('../persistence');

module.exports = async (req, res) => {
    console.log(req.body.name);
    await db.removeItem(req.params.id);
    res.sendStatus(200);
};
