const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/api/v1/projects', (req, res) => {
    db.Project.find({})
    .then((dbProjects) => res.json(dbProjects))
    .catch((err) => res.json(err));
});

// router.post('/api/v1/projects', (req, res) => {
//     db.Project.create(req.body)
//         .then(function(dbProject) {
//             // View the added result in the console
//             // console.log(dbArticle);
//         })
//         .catch(function(err) {
//             // If an error occurred, send it to the client
//             return res.json(err);
//         });
// })
module.exports = router;