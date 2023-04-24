import React from "react";

let state = { username: "", accessToken: "", refreshToken: "" };

const MyContext = React.createContext(state);
MyContext.displayName = "AccountContext";
export const AccountContext = MyContext;
