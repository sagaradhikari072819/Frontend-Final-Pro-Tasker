import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzcyMThkOGUxNmJhMzFjMmM5NjJkMCIsInVzZXJuYW1lIjoibWlsYW4xMTEiLCJlbWFpbCI6Im1pbGFuMTExQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTc2NTM4ODc0NCwiZXhwIjoxNzY1NDc1MTQ0fQ.LTFTOkrL4IfOks-dEPv1pEFjQPw7ge2HYI8W7tNnBdI"
  },
});


//axios interceptor
//I need to inject token dynamically after login so i need to add interceptor to attach token automatically
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });