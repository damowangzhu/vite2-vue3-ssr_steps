const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const staticPath = require('koa-static');

const app = new Koa();
const resolve = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8');
const manifest = require('./dist/client/ssr-manifest.json');
const render = require('./dist/server/entry-server.js').render;

app.use(staticPath(resolve('./dist/client'), { index: false }));

app.use(async (ctx, next) => {
  const url = ctx.req.url;
  try {
    const { appHtml, state } = await render(url, manifest);

    const html = template
      .replace(`<!--ssr-outlet-->`, appHtml)
      .replace(`'<!--vuex-state-->'`, JSON.stringify(state))
      .replace('<!--title-->', state.route.meta.title || 'Index');

    ctx.body = html;
  } catch (error) {
    console.log(error);
    next();
  }
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
