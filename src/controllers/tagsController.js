const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const { user_id } = request.params;

    //usamos o knex para acessarmos a tabela de tags
    //filtrando pelas tags que tenha o mesmo user_id
    const tags = await knex("tags")
		.where({ user_id })

    return response.json(tags);



  }
}


module.exports = TagsController;