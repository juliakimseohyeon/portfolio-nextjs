const nextConfig = {
	optimizeFonts: true,
	// biome-ignore lint/suspicious/noExplicitAny:
	webpack: (config: any) => {
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: "asset/resource",
		});
		return config;
	},
	turbopack: {},
};

export default nextConfig;
