const express = require('express');
const router = express.Router();
const Word = require('../models/Content');

// Create content here.
router.post('/createword', async(req, res) => {

    try {
        word = await Word.create({
            sno: req.body.sno,
            content: req.body.content
        })
        const data = {
            word: {
                id: word.id
            }
        }
        console.log(data);
        res.json({ data })
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Some internal esdfsdrror are here.')
        console.log(req.body);
    }
})


// // fetching all data about user
router.post('/getword', async(req, res) => {
    try {
        userId = req.header('word-token');
        let user = await Word.findOne({ sno: userId });
        if (user) {
            res.send(user)
        }
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal somesdf sdf sd Error are occuring.');
    }
})


module.exports = router;