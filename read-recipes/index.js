const recipes = require('../shared/recipe.service');
module.exports = async function(context, req) {
  const SIZE = 10;
  const sort = req.query.sort ? req.query.sort : 'title';
  const order = req.query.order ? req.query.order : 'asc';
  const page = req.query.page ? req.query.page : 1;
  await recipes
    .getRecipes(sort, order, page, SIZE)
    .then(data => {
      context.res = {
        body: data
      };
    })
    .catch(err => {
      context.res = {
        status: 500,
        body: err
      };
    });
};
