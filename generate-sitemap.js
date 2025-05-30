// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.buildamodel.in' });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/#what-we-do', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#why-us', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#process', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#portfolio', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#pricing', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#quote', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/#contact', changefreq: 'monthly', priority: 0.8 });

  sitemap.end();

  await streamToPromise(sitemap);
  
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();