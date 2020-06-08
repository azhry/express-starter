import { agama } from '../models/index';

module.exports = {
    list(req, res) {
        return agama
            .findAll({})
            .then(agama => res.status(200).send(agama))
            .catch(error => res.status(400).send(error));
    },

    add(req, res) {
        const data = {
            name: req.body.name,
            description: req.body.description,
            priority: req.body.priority || 0
        };

        return agama
            .create(agama)
            .then(agama => res.status(201).send(agama))
            .catch(error => res.status(400).send(error));
    }
};