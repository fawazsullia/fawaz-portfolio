module.exports = {
  reactStrictMode: true,

  //redirecting all pages to 404 page for the timebeing when the site is in development
  async redirects() {
    return [
      {
        source: '/',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/404',
        permanent: true,
      },{
        source: '/blog',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/develop',
        destination: '/404',
        permanent: true,
      },
    ]
  },

}
