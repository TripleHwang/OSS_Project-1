import Router from 'koa-router'
import notes from './notes'
import settings from './blog'
import showmemo from './showmemo'

const router = new Router()
router.get('/', async (ctx, next) => {
  ctx.redirect('/notes')
})
router.use(notes.routes(), notes.allowedMethods())
router.use(settings.routes(), settings.allowedMethods())
router.use(showmemo.routes(), showmemo.allowedMethods())
export default router
