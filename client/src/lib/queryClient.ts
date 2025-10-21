import { QueryClient } from "@tanstack/react-query";

async function handleResponse(response: Response) {
  if (response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return await response.text();
  }

  let errorMessage: string;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const error = await response.json();
    errorMessage = error.message || `Request failed with status ${response.status}`;
  } else {
    errorMessage = await response.text() || `Request failed with status ${response.status}`;
  }

  throw new Error(errorMessage);
}

export async function apiRequest(
  url: string,
  options?: RequestInit
): Promise<any> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });

  return handleResponse(response);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string, {
          credentials: "include",
        });
        return handleResponse(response);
      },
      staleTime: 5 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
