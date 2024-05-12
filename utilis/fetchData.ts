export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.status;
    console.error(error);
    return Promise.reject(error);
  }

  return (await response.json()) as Promise<T>;
}
