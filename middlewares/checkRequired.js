module.exports = checkRequired = (params) => (req, res, next) => {
  if (
    !params.some((e) => {
      if (!Object.keys(req.body).includes(e)) return next(e);
    })
  )
    return next();
};
