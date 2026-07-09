export const crudFactory = (schema, modelName) => {
  const getModel = (db) => {
    try { return db.model(modelName); }
    catch { return db.model(modelName, schema); }
  };

  return {

    getAll: async (req, res) => {
      try {
        const Model = getModel(req.tenant.db);

        const page  = Math.max(1, parseInt(req.query.page)  || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 25)); 
        const skip  = (page - 1) * limit;

        
        const [total, data] = await Promise.all([
          Model.countDocuments(),
          Model.find().sort({ createdAt: -1 }).skip(skip).limit(limit)
        ]);

        const totalPages = Math.ceil(total / limit);

        res.json({
          success: true,
          data,
          pagination: {
            total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
          }
        });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    },

    getById: async (req, res) => {
      try {
        const Model = getModel(req.tenant.db);
        const data  = await Model.findById(req.params.id);
        if (!data) return res.status(404).json({ success: false, message: `${modelName} not found` });
        res.json({ success: true, data });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    },


    create: async (req, res) => {
      try {
        const Model = getModel(req.tenant.db);
        const data  = await Model.create(req.body);
        res.status(201).json({ success: true, message: `${modelName} created successfully`, data });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    },

    update: async (req, res) => {
      try {
        const Model = getModel(req.tenant.db);
        const data  = await Model.findByIdAndUpdate(
          req.params.id, req.body, { new: true, runValidators: true }
        );
        if (!data) return res.status(404).json({ success: false, message: `${modelName} not found` });
        res.json({ success: true, message: `${modelName} updated successfully`, data });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    },


    delete: async (req, res) => {
      try {
        const Model = getModel(req.tenant.db);
        const data  = await Model.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ success: false, message: `${modelName} not found` });
        res.json({ success: true, message: `${modelName} deleted successfully` });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    },
  };
};
