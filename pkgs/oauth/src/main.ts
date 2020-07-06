// @ts-ignore
import Koa from 'koa'
import koaBody from 'koa-bodyparser'
import KoaRouter from 'koa-router'
import { default as Axios } from 'axios'
import koaStatic from 'koa-static-server'
import * as Env from './env'

const App = new Koa()

App.use(koaBody())

const Router = new KoaRouter()

const PostUrl = 'https://github.com/login/oauth/access_token'

Router.post('/access_token', async (ctx) => {
	const from = String(ctx.query?.from ?? '')
	const code = String(ctx.request.body?.code)

	const res = await Axios.post(PostUrl, {
		code,
		client_id: Env.ClientId,
		client_secret: Env.ClientSecret,
	})
	console.log(res)

	const searchPrams = new URLSearchParams(res.data)

	ctx.body = {
		access_token: searchPrams.get('access_token'),
		from,
	}
})

App.use(Router.routes())

App.use(
	koaStatic({
		rootDir: 'pkgs/app/dist',
		notFoundFile: '/index.html',
	}),
)

App.listen(process.env.PORT || 3000, () => {
	console.log('up')
})
