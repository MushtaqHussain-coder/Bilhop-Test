const defaultHandler = (err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ success: false });
};

const notFound = (req, res, next) => {
  res.status(404).json({ success: false, message: 'Route not found' });
};

module.exports = {
  defaultHandler,
  notFound,
};
