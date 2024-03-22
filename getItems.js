const db = require('../persistence');

module.exports = async (req, res) => {
    console.log(req.body.name);
    const items = await db.getItems();
    res.send(items);
};
