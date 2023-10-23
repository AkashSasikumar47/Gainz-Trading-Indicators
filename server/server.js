const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://user-001:<8044>@cluster0.xdyzaiy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const Indicator = mongoose.model('Indicator', {
    name: String,
    description: String,
    image: String,
    githubLink: String,
    howToUse: String,
});

app.use(bodyParser.json());
app.use(cors());

app.post('/indicators', (req, res) => {
    const { name, description, image, githubLink, howToUse } = req.body;
    const indicator = new Indicator({ name, description, image, githubLink, howToUse });

    indicator.save((err) => {
        if (err) {
            res.status(500).json({ message: 'Error saving indicator' });
        } else {
            res.status(201).json({ message: 'Indicator saved' });
        }
    });
});

app.get('/indicators', (req, res) => {
    Indicator.find((err, indicators) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching indicators' });
        } else {
            res.status(200).json(indicators);
        }
    });
});

app.get('/indicators/:id', (req, res) => {
    const { id } = req.params;
    Indicator.findById(id, (err, indicator) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching indicator' });
        } else {
            res.status(200).json(indicator);
        }
    });
});

app.put('/indicators/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    Indicator.findByIdAndUpdate(id, updatedData, (err, updatedIndicator) => {
        if (err) {
            res.status(500).json({ message: 'Error updating indicator' });
        } else {
            res.status(200).json({ message: 'Indicator updated' });
        }
    });
});

app.delete('/indicators/:id', (req, res) => {
    const { id } = req.params;

    Indicator.findByIdAndRemove(id, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting indicator' });
        } else {
            res.status(200).json({ message: 'Indicator deleted' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});