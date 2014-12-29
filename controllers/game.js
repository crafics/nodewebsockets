/**
 * GET /
 * get game.
 */

exports.getGame = function(req, res) {
  res.render('game', {
    title: 'game'
  });
};
