import database from "../../db.json";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "")
).replace(/\/$/, "");

export const buildApiUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return API_BASE_URL ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
};

const getLocalJsonData = (path) => {
  const [collectionName, itemId] = path.replace(/^\/+/, "").split("/");
  const collection = database[collectionName];

  if (!collection) {
    throw new Error(`Local data not found for ${path}`);
  }

  if (!itemId) {
    return collection;
  }

  if (!Array.isArray(collection)) {
    throw new Error(`Local collection is not a list for ${path}`);
  }

  const matchedItem = collection.find(
    (item) => String(item.id) === String(itemId)
  );

  if (!matchedItem) {
    throw new Error(`Local item not found for ${path}`);
  }

  return matchedItem;
};

export const fetchJson = async (path, options) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!API_BASE_URL) {
    return getLocalJsonData(normalizedPath);
  }

  try {
    const response = await fetch(buildApiUrl(normalizedPath), options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return getLocalJsonData(normalizedPath);
  }
};
