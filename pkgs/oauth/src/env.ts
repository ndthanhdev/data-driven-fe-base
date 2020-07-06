// @ts-ignore
import DotEnv from 'dotenv'
DotEnv.config({
	path: 'pkgs/oauth/.env',
})

export const ClientId = String(process.env.CLIENT_ID)
export const ClientSecret = String(process.env.CLIENT_SECRET)
