import { setupDB } from "./db";
import { seedData } from "./seedData";
import { setupServer } from "./server";

async function main() {
  try {
    await setupServer();
    await setupDB(true);
    await seedData();
  } catch (error) {
    console.error(error);
  }
}

main();
