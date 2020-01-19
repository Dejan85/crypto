const useAuthenticate = () => {
  const isAuthenticated = () => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  };

  return {
    isAuthenticated
  };
};

export default useAuthenticate;
