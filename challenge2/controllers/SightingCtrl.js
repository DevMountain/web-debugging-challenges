var Sighting = require('../models/Sighting');

module.exports = {
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save( function(err, result) {
      if (err) {
         res.status(500).send(err);
      }
      res.send(result);
    });
  },

  read: function(req, res) {
    console.log('req.query: ', req.query);
    Sighting.find(req.query)
    .populate('user', 'username')
    .exec(function(err, result) {
      if (err) { 
        res.status(500).send(err);
      }
      res.send(result);
    });
  },

  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      res.send(result);
    });
  },

  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if (err){ 
        res.status(500).send(err);
      }
      res.send(result);
    });
  }
};
