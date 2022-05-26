import { 
  createCookie
  } from '@remix-run/node';

export const setTheCookies = async({access_token, refresh_token} : {
  access_token: String,
  refresh_token: String | Number
}) => {

  const accessToken = createCookie("access_token", {
    maxAge: 604_800,
    sameSite: "strict"
  });

  const refreshToken = createCookie("refresh_token", {
    maxAge: 604_800,
    sameSite: "strict"
  });

  const headers = new Headers();
  headers.append('Set-Cookie', await accessToken.serialize(access_token))
  headers.append('Set-Cookie', await refreshToken.serialize(refresh_token))
  return headers
}