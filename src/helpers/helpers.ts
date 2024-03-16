export const init = () => {
    try {
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;
  
      return {
        logged: !!user,
        user: user,
      };
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return {
        logged: false,
        user: null,
      };
    }
  };