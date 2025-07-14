import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const useProxy = mode === "proxy"; // only when we ran `npm run dev:proxy`
	return {
		plugins: [react(), tailwindcss()],
		server: {
			allowedHosts: ["solid-enormously-crane.ngrok-free.app"],
			host: true,
			port: 5173,
			proxy: useProxy
				? {
						"/api": {
							target: "https://solid-enormously-crane.ngrok-free.app",
							changeOrigin: true,
							secure: false,
							configure: (proxy) => {
								proxy.on("proxyReq", (proxyReq) => {
									proxyReq.setHeader(
										"ngrok-skip-browser-warning",
										"1"
									);
								});
							},
						},
				  }
				: undefined,
		},
	};
});
