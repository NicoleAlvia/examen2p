const appliances = require('./data');

const resolvers = {
  getAppliance: ({ id }) => {
    return appliances.find(appliance => appliance.id === id);
  },
  getAppliances: () => {
    return appliances.filter(appliance => !appliance.eliminadoLogico);
  },

  //Crear mutacion
  createAppliance: ({ input }) => {
    const newAppliance = {
      id: String(appliances.length + 1),
      ...input,
      eliminadoLogico: false
    };
    appliances.push(newAppliance);
    return newAppliance;
  },

  //Modificar 
  updateAppliance: ({ id, input }) => {
    const index = appliances.findIndex(appliance => appliance.id === id);
    if (index === -1) throw new Error('Appliance not found');
    appliances[index] = { ...appliances[index], ...input };
    return appliances[index];
  },
  //Eliminacion fisica

  deleteAppliance: ({ id }) => {
    const index = appliances.findIndex(appliance => appliance.id === id);
    if (index === -1) throw new Error('Appliance not found');
    const deletedAppliance = appliances.splice(index, 1)[0];
    return deletedAppliance;
  },
  
  // Eliminacion Logica
  softDeleteAppliance: ({ id }) => {
    const appliance = appliances.find(appliance => appliance.id === id);
    if (!appliance) throw new Error('Appliance not found');
    appliance.eliminadoLogico = true;
    return appliance;
  }
};

module.exports = resolvers;
