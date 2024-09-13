export default function MetaTags({ data }) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=false" />
    <meta charset="UTF-8" />
    <meta name="description" content={data.description} />
    <meta name="author" content={data.authorName} />
    <meta property="og:title" content={data.title}/>
    <meta property="og:description" content={data.description}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:locale" content="en_GB"/>
    <meta property="og:site_name" content="Jayson Hunter"/>
    <meta property="og:image" content={data.ogImage}/>
    <meta property="og:image:width" content={data.ogImageWidth}/>
    <meta property="og:image:height" content={data.ogImageHeight}/>

    <meta name="twitter:card" content="" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={data.twitterImage} />
    </>
  )
}