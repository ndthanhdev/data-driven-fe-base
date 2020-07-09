import * as ReactRouter from 'react-router-dom';

export const useSearch = (name: string) => {
	const search = ReactRouter.useLocation().search;
	return new URLSearchParams(search).get(name) ?? undefined;
};
