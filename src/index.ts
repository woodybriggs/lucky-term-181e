export default {
	async fetch(request, env, ctx): Promise<Response> {
		let value = await env.SUPER_DUPER_SECRET.get()
		return new Response(value);
	},
} satisfies ExportedHandler<Env>;
