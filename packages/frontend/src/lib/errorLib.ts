export function onError(error: unknown) {
  let message = String(error);

  if (!(error instanceof Error) && error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  }

  alert(message);
}
