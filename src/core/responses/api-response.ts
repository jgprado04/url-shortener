export const ApiResponse = <T extends object>(response: T | string) => ({
  is_error: false,
  response,
});
