module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  },
};
