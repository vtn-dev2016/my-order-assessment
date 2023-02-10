
function errorMiddleware(
  error,
  req,
  res,
  next
) {
  const status = error.status || 500;
  let message = error.message || "Something went wrong";

  if (process.env.NODE_ENV === 'development') {
    console.error("[ERROR] ", status, error);
  }

  res.status(status).json({ success: false, message });
}

export default errorMiddleware;
