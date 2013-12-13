/* global exports */

exports.familyList = function(db) {
  return function(req, res) {
    var collection = db.get('family');
    collection.find({},{},function(e,docs){
      res.json(200, docs);
    });
  };
};