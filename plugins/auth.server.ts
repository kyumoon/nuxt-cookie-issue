
export default defineNuxtPlugin((nuxtApp) => {
  const tokenExpired = true;
  let token = "";
  if (tokenExpired) {
    token = getAccessToken();
    useCookie("token", {
      default: () => token,
    });
  }

  // it needs for useAsyncData (SSR)
  const event = useRequestEvent();
  if (token && event) {
    const cookie = event.node.req.headers.cookie;
    event.node.req.headers.cookie = cookie
      ? cookie + `;token=${token}`
      : `token=${token}`;
  }
});

function getAccessToken() {
  return new Date().getTime().toString();
}
