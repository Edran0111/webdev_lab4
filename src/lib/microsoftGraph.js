// file src/lib/microsoftGraph.js
import * as msal from '@azure/msal-browser'


const requestedScopes = {
  scopes: ["User.Read"]
}


const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
  },
  cache: {
    cacheLocation: "sessionStorage",
  }
})

export async function signInAndGetUser () {
  console.log(process.env.VUE_APP_OAUTH_CLIENT_ID)
  const authResult = await msalInstance.loginPopup(requestedScopes)
  msalInstance.setActiveAccount(authResult.account)
  return authResult.account
}