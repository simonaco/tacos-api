const recipes = require('../shared/recipe.service');
module.exports = async function(context, req) {
  await recipes
    .updateRecipe(req.params.id, context.req.body)
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
