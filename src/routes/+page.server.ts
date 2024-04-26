import type { Actions } from './$types.js';
import { ANSWER } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const code = data.get('code');
		if (code !== ANSWER) {
			console.log('no');
			return { error: true };
		}
		console.log('yes');
		return { error: false };
	}
} satisfies Actions;
