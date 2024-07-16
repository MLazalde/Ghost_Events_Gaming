const router = require("express").Router();
const { Model } = require("sequelize");
const { User, Product, Set, Card } = require("../../models");

router.get('/', async (req, res) => {
    try {
        //product has many sets
        const dbProductData = await Product.findAll({
            include: {
                {
                    model: Set,
                    attributes:[set_name, description]
                },
            }
        })

    }


})