const PRODUCTION_API_BASE_URL = "https://fashionmodeling.onrender.com";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000"
    : PRODUCTION_API_BASE_URL)
).replace(/\/$/, "");

export const buildApiUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

export const fetchJson = async (path, options) => {
  const response = await fetch(buildApiUrl(path), options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};
