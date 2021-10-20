import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE4NTQwMmRmYTA3MjQ1YmNhMGNkNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDQ4NTQxNiwiZXhwIjoxNjM0NzQ0NjE2fQ.HB798MYNYBow7zRj6GqLphPRG4EdI1xz3z7auqLCaeI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
