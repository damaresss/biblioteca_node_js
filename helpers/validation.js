exports.checkIfItemExistsAndReturn = async (targetId, model) => {
  try {
    const item = await model.findById(targetId);
    if (item === null) {
      let error = new Error("Item não encontrado");
      error.statusCode = 404;
      throw error;
    }
    return item;
  } catch (error) {
    console.error;
  }
};
