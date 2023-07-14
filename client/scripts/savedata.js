export async function saveData(data, todos, token) {
  const userToken = useUserToken();
  const serverUrl = "http://localhost:3333/save";

  const body = JSON.stringify({
    data: { ...data },
    todos: { ...todos },
    token,
  });
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (response.ok) {
      const responseData = await response.json();
      const token = responseData.token;
      userToken.value = token;
    } else {
      console.log("Error saving data:", response.status);
    }
  } catch (error) {
    console.log("Error saving data:", error.message);
  }
}
