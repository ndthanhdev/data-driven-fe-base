// @ts-ignore
import DotEnv from 'dotenv'

if (process.env.NODE_ENV === 'dev') {
	DotEnv.config({
		path: 'pkgs/oauth/.env',
	})
}

export const Origin = String(process.env.ORIGIN)
export const ClientId = String(process.env.CLIENT_ID)
export const ClientSecret = String(process.env.CLIENT_SECRET)