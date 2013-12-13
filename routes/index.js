/* global exports */

exports.helloworld = function(req, res){
  res.json('helloworld', { title: 'Hello, World!' });
};