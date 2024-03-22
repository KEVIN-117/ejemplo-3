const db = require('../persistence');

module.exports = async (req, res) => {
    console.log(req.body.name);
    await db.updateItem(req.params.id, {
        name: req.body.name,
        completed: req.body.completed,
    });
    const item = await db.getItem(req.params.id);
    res.send(item);
};
