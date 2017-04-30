import Router from 'koa-router'
const router = new Router({prefix: '/showmemo'})

router.get('/', async (ctx, next) => {
  await ctx.render('showmemo', {})
})

export default router