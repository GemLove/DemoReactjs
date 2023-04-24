import axios from "./axios";
import { useEffect } from "react";
import { axiosPrivate } from "./axios";
import Cookie from "universal-cookie";

const cookies = new Cookie();

interface accountType {
  username: string;
  accessToken: string;
  refreshToken: string;
}

const clearToDo = [{ id: " ", job: " " }];

const account: accountType = cookies.get("_user");

const refreshToken = async () => {
  const respone = await axios.post(
    "/account/refresh",
    { authorization: account.refreshToken },
    {
      headers: {
        authorization: "Beare " + account.refreshToken,
      },
    }
  );
  account.accessToken = respone.data;
  cookies.set("_user", account);
  return respone.data;
};


export default refreshToken;
