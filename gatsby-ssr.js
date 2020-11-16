const React = require("react")

const fbPixel = <script
async
key={`uh-facebook-pixel`}
dangerouslySetInnerHTML={{
  __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=0;n.version='2.0';
  n.queue=[];t=b.createElement(e);e.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://{facebookdirection}/connectfb/en_US/fbevents.js');
  fbq("init", "COLMENITA_PIXEL");
  fbq("track", "PageView");
`,
}}
/>

const gtag = <script
  async
  key={`uh-gtag`}
  src={`https://unifiedhealthadvisors.com/gtagm/gtag/js?id=UA-144175240-1`}
/>

const gtagInlineScript = <script
  async
  key={`uh-gtag-inline-script`}
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-144175240-1");
  `,
  }}
/>

const hotjar = <script
  async
  key={`uh-hotjar`}
  dangerouslySetInnerHTML={{
    __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2046184,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
  }}
/>

const microdata = <script
  async
  key={`lacolmenita-microdata`}
  type={`application/ld+json`}
  dangerouslySetInnerHTML={{
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://lacolmenita.netlify.app",
      "logo": "https://lacolmenita.imgix.net/gaTifPU.png?width=512&height=512&format=webp",
      "image": ["https://lacolmenita.imgix.net/gaTifPU.png?width=512&height=512&format=webp"],
      "@id": "https://lacolmenita.netlify.app",
      "name": "La Colmenita",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13 e/ F y G, Vedado",
        "addressLocality": "Plaza de la Revolución",
        "addressRegion": "La Habana",
        "postalCode": "10400",
        "addressCountry": "CU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.13660400000001,
        "longitude": -80.33222900000001
      },
      "telephone": "+5378454697",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          "opens": "08:00:00",
          "closes": "20:00:00"
        },
      ],      
    }
  `,
  }}
/>

const HeadComponents = [/*fbPixel, gtag, gtagInlineScript,*/ microdata]
const PostBodyComponents = [hotjar]

exports.onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
  setHeadComponents(HeadComponents)
  setPostBodyComponents(PostBodyComponents)
}
