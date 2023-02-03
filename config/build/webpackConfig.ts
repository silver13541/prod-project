import type {Configuration} from "webpack";
import { buildDevServer } from "./devServer";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { buildRules } from "./rules";
import type { BuildOptions } from "./types";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const {mode, paths, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildRules(options),
          },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}