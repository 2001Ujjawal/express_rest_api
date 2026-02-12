const validate = (schema) => {
  return (req, res, next) => {
    /**
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Validation failed",
        errors: [
          {
            field: "body",
            message: "Request body cannot be empty"
          }
        ]
      });
    }
 */
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Validation failed",
        errors: error.details.map((err) => ({
          field: err.path[0],
          message: err.message.replace(/"/g, ""),
        })),
      });
    }

    req.body = value;
    next();
  };
};

module.exports = validate;
