type ApiError = { error: string };
type ApiData = { id: number; name: string };
type ApiResponse = ApiError | ApiData;

function handleResponse(res: ApiResponse) {
  const data = res as ApiData;
  console.log(data.name);
}
