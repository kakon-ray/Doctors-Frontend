import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import axios from "axios";
const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;

    const currentUser = { email: email };
    const addUser = async () => {
      if (email) {
        const response = await axios.put(
          `http://localhost:5000/user/${email}`,
          currentUser
        );
        const accessToken = response.data.token;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
        console.log(response);
      }
    };
    addUser();
    // useing fetch
    //  if (email) {
    //    fetch(`http://localhost:5000/user/${email}`, {
    //      method: "PUT",
    //      headers: {
    //        "content-type": "application/json",
    //      },
    //      body: JSON.stringify(currentUser),
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        console.log("data inside useToken", data);
    //        const accessToken = data.token;
    //        localStorage.setItem("accessToken", accessToken);
    //        setToken(accessToken);
    //      });
    //  }
  }, [user]);

  return [token];
};

export default useToken;
