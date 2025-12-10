import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // headers: {
  //   Authorization:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBiN2M3NzgwZDVhMDM4YzAyMWQ2MiIsInVzZXJuYW1lIjoidXNlcjAwMCIsImVtYWlsIjoidXNlcjAwMEB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NTA4MTQ5NCwiZXhwIjoxNzY1MTY3ODk0fQ.NomaPh6RjTm4I2s859YZS6A2JE2GskDXepuCM6cxIvI",
  // },
});


//axios interceptor
//I need to inject token dynamically after login so i need to add interceptor to attach token automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});