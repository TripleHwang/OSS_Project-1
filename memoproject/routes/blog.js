import Router from 'koa-router'
const router = new Router({prefix: '/blog'})

router.get('/', async (ctx, next) => {
  await ctx.render('blog', {})
})

export default router