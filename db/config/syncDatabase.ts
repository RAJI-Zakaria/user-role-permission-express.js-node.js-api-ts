import db from "../index";

const setupDatabase = () => {
  const { dbInstance } = db;

  dbInstance
    .sync() //{ alter: true }
    .then(() => {
      // This will sync the database with the models (update any changes)
      console.log("Database is synced");
    })
    .catch((err: any) => {
      console.error("Error syncing the database:", err);
    });

  // Graceful shutdown
  const shutdown = async () => {
    try {
      console.log("\nShutting down gracefully...");
      await dbInstance.close();
      console.log("Database connection closed.");
      process.exit(0);
    } catch (err: any) {
      console.error("Error during shutdown:", err.message);
      process.exit(1);
    }
  };
  // INFO : Graceful shutdown handlers
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
};

export default setupDatabase;
