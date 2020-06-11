const clientProfileService = require('../services/clientProfile.service');

exports.totalClients = (req, res, next) => {
    clientProfileService.getAll()
        .then(AllClients => {
          res.json({totalClients: AllClients.length})
        })
        .catch(err => next(err));
};
