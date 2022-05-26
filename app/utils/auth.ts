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
  return {
    access_token: fetchResult.access_token,
    refresh_token: fetchResult.refresh_token,
  } 
}

export const auth = async(code: string) => {
  const data = `client_secret=${process.env.CLIENT_SECRET}&client_id=${CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`
  const tokens = fetchNewTokens(data)
  return tokens
}