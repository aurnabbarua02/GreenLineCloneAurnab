module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      name: {
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };