import app from "./app.js";
import dbConnect from "./config/dbConnect.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 8000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Server startup failed", error);
    process.exit(1);
  });
