import { default as Axios } from 'axios'

const TokenKey = 'TokenKey'
const ClientId = '1d4487ba605cb0e29ccb'
const PostUrl = 'http://localhost:3000/access_token'

export const getAccessToken = () => localStorage.getItem(TokenKey)
export const removeToken = () => localStorage.removeItem(TokenKey)
const setAccessToken = (token: string) => localStorage.setItem(TokenKey, token)

export const getAuthorization = () => `token ${getAccessToken()}`

export const generateToken = async (code: string, from?: string) => {
	const resp = await Axios.post(
		PostUrl,
		{
			code,
		},
		{},
	)

	const accessToken = resp.data?.access_token

	if (!accessToken) {
		return false
	}

	setAccessToken(accessToken)
	return true
}

export const getAuthorizeLink = (from?: string) =>
	`https://github.com/login/oauth/authorize?client_id=${ClientId}&redirect_uri=http://localhost:3000/authorize?from=${
		from ?? ''
	}`
