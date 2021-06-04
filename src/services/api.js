import axios from "axios";

const API_URL = "http://localhost:8080/api";

const API_OPTIONS = {
  "Content-Type": "application/json",
};

export async function index(route) {
  try {
    const response = await axios.get(API_URL + route, {
      headers: API_OPTIONS,
    });

    return response;
  } catch (error) {
    return null;
  }
}

export async function create(route, data) {
  try {
    const response = await axios.post(
      API_URL + route,
      {
        ...data,
      },
      {
        headers: API_OPTIONS,
      }
    );

    return response;
  } catch (error) {
    return null;
  }
}

export async function update(route, data) {
  try {
    const response = await axios.put(
      API_URL + route,
      {
        ...data,
      },
      {
        headers: API_OPTIONS,
      }
    );

    return response;
  } catch (error) {
    return null;
  }
}
export async function destroy(route) {
  try {
    const response = await axios.delete(API_URL + route, {
      headers: API_OPTIONS,
    });

    return response;
  } catch (error) {
    return null;
  }
}
