export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al obtener los datos: ${(error as Error).message}`);
  }
};
