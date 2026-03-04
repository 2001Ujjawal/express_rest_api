const { errorHandle } = require("../utils/response.utils");

const validate = (schema) => {
  return (req, res, next) => {
    if (!req.body) {
      return errorHandle(res, false, 500, "Request body is empty");
    }
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true,
    });
    
    if (error) {
      console.log("check error object");
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Validation failed",
        errors: error.details.map((err) => ({
          // field: err.path[0],
          message: err.message.replace(/"/g, ""),
        })),
      });
    }
    req.body = value;
    next();
  };
};

module.exports = validate;

//!Error response with key array value faired
/*
 const validate = (schema) => {
  return (req, res, next) => {
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
        errors: error.details.reduce((acc, err) => {
          const field = err.path[0];

          if (!acc[field]) {
            acc[field] = [];
          }

          acc[field].push(err.message.replace(/"/g, ""));
          return acc;
        }, {}),
      });
    }

    req.body = value;
    next();
  };
};

module.exports = validate;
*/
/**const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // get all field errors
      allowUnknown: false, // don't allow extra fields
      stripUnknown: true, // remove unknown fields
    });

    if (error) {
      const formattedErrors = error.details.reduce((acc, err) => {
        const field = err.path.join(".");

        if (!acc[field]) {
          acc[field] = [];
        }

        acc[field].push(err.message.replace(/"/g, ""));
        return acc;
      }, {});

      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Validation failed",
        errors: formattedErrors,
      });
    }

    req.body = value; // cleaned value
    next();
  };
};
module.exports = validate; */
