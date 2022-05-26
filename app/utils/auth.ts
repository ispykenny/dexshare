import {
  CLIENT_ID,
  REDIRECT_URI,
  TOKENS_ENDPOINT
} from "./constants";
import {
  TokenTypes
} from './types';

export const fetchNewTokens = async (data: string): Promise<TokenTypes> => {
  const fetcher = await fetch(TOKENS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data
  })
  const fetchResult = await fetcher.json();
  return fetchResult
}

export const auth = async(code: string) => {
  const data = `client_secret=${process.env.CLIENT_SECRET}&client_id=${CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`
  const tokens = fetchNewTokens(data)
  // tokens =  {
  //   access_token: 1,
  //   expires_in:600,
  //   token_type:Bearer,
  //   refresh_token:1
  // }
  return tokens
}