import "./src/styles/global.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

// export const onRouteUpdate = ({location}) => {
//   // Don't track facebook pixel while developing.
//   if (process.env.NODE_ENV === `production` && typeof window.fbq === `function`) {
//     window.fbq("track", "ViewContent");
//   }

//   // Gtag config
//   if (typeof window.gtag !== `function`) return
//   let locationStr = '';
//   if (location) locationStr = `${location.pathname}${location.search}${location.hash}`
//   window.gtag('config', 'UA-144175240-1', {page_path: locationStr});
// };