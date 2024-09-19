interface IApi {
  baseUrl: string;
  jsonServerUrl: string;
  endpoints: Record<string, string>;
}

export const API: IApi = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  jsonServerUrl: "http://localhost:8000",
  endpoints: {
    photos: "/photos",
    todos: "/todos",
  },
};
