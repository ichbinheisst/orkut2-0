const Api_Base = "http:localhost:3333/";

export const checkToken = (token, navigation, setUser) => {
  fetch(`${Api_Base}checkToken`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  })
    .then((data) => {
      getUser(setUser, token, navigation);
      navigation.navigate("BottomNav");
    })
    .catch(() => navigation.navigate("Login"));
};

export const PostLogin = (user, setToken, setError, setUser, navigation) => {
  const adress = Api_Base;

  fetch(adress, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.token) {
        getUser(setUser, data.token, navigation);
        setToken(data.token);
      }
    })
    .catch(() => setError("login invalid"));
};

export const getUser = (setUser, token, navigation) => {
  const adress = `${Api_Base}home`;
  fetch(adress, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  })
    .then((data) => data.json())
    .then((json) => {
      if (json) ;
      return setUser(json);
    })

    .catch((err) => {
      console.log(err)
      navigation.navigate('Login');
      
    });
};
