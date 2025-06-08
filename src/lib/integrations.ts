// Utility functions for third-party integrations
export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  throw new Error(error.message || 'An error occurred');
};

export const validateApiResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
