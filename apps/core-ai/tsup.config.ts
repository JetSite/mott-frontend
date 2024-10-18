import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/**/*.ts", "!./src/**/*.test.ts"],
  format: ["esm"],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ["hono"],
});
