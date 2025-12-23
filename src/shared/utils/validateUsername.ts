function validateUsername(raw: string): { valid: boolean; errorMsg?: string } {
  const username = raw.trim().toLowerCase();

  if (!username) {
    return { valid: false, errorMsg: "Username can't be empty" };
  }

  if (username.length < 1 || username.length > 39) {
    return {
      valid: false,
      errorMsg: "Username must be between 1 and 39 characters",
    };
  }

  const allowed = /^[A-Za-z0-9-]+$/;

  if (!allowed.test(username)) {
    return {
      valid: false,
      errorMsg: "Only letters, numbers and dashes are allowed",
    };
  }
  if (username.startsWith("-")) {
    return {
      valid: false,
      errorMsg: "Username can not start with dash",
    };
  }

  if (username.endsWith("-")) {
    return {
      valid: false,
      errorMsg: "Username can not end with dash",
    };
  }
  if (username.includes("--")) {
    return {
      valid: false,
      errorMsg: "Username can not contain consecutive dashes",
    };
  }
  return { valid: true };
}

export default validateUsername;
