export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return `${error.message}`;
  } else if (typeof error === "string") {
    return error;
  }
  return "something went wrong";
}
