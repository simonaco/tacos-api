const recipes = require('../shared/recipe.service');
module.exports = async function(context, req) {
  await recipes
    .getRecipe(req.params.id)
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
