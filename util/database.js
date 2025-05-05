import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

let database;

export async function init() {
  if (!database) {
    database = await SQLite.openDatabaseAsync("places.db");
  }

  await database.execAsync(
    `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        );`
  );

  return database;
}

export async function insertPlace(place) {
  if (!database) {
    throw new Error("Database not initialized. Call init() first.");
  }

  try {
    const result = await database.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lng,
      ]
    );

    const insertedPlace = {
      id: result.lastInsertRowId,
      ...place,
    };

    console.log("Inserted place:", insertedPlace);

    return result;
  } catch (error) {
    console.error("Insert failed:", error);
    throw error;
  }
}

export async function fetchPlaces() {
  if (!database) {
    throw new Error("Database not initialized. Call init() first.");
  }

  try {
    const result = await database.getAllAsync(`SELECT * FROM places`);

    console.log("Fetched places:", result);

    return result;
  } catch (error) {
    console.error("Fetching places failed:", error);
    throw error;
  }
}

export async function fetchPlaceDetails(id) {
  if (!database) {
    throw new Error("Database not initialized. Call init() first.");
  }

  try {
    const result = await database.getFirstAsync(
      `SELECT * FROM places WHERE id = ?`,
      [id]
    );

    const dbPlace = result;
    const place = new Place(
      dbPlace.title,
      dbPlace.imageUri,
      { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
      dbPlace.id
    );
    console.log("");
    console.log("");
    console.log("");
    console.log("Fetched place details:", result);
    return place;
  } catch (error) {
    console.error("Fetching place details failed:", error);
    throw error;
  }
}
