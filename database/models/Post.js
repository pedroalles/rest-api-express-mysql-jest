const { DataTypes, Model } = require('sequelize');

class Post extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.STRING,
        }, { sequelize });
    }
}

module.exports = Post;
