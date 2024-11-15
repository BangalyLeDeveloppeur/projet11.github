const apiLogin = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { token: null, error: errorData.message || "Login failed" };
    }

    const res = await response.json();

    const data = res.body;
    ///console.log(data)
    return { token: data.token, error: null };
  } catch (error) {
    console.error("Login API error:", error);
    return { token: null, error: "An unexpected error occurred during login" };
  }
};

const apiGetProfile = async (token) => {
  try {
    const profileResponse = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!profileResponse.ok) {
      const errorData = await profileResponse.json();
      return {
        firstName: null,
        error: errorData.message || "Failed to fetch profile",
      };
    }

    const profileData = await profileResponse.json();
    return { firstName: profileData.body.firstName, error: null };
  } catch (error) {
    console.error("Profile API error:", error);
    return {
      firstName: null,
      error: "An unexpected error occurred while fetching profile",
    };
  }
};

export { apiLogin, apiGetProfile };
