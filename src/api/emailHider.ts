const emailHider = async (token: string) =>
{
    return fetch(import.meta.env.VITE_API as string, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          site: import.meta.env.VITE_SITE,
        }),
      })
}

export default emailHider