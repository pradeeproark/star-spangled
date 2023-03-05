import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    watch: {
      include: "./src/**",
      clearScreen: false,
    },
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.umd,
        format: "umd",
        sourcemap: true,
        name: packageJson.name,
      },
    ],
    plugins: [
      resolve(),
      vanillaExtractPlugin(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx", "**/*.test.ts?(x)"],
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
