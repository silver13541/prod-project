import path from 'path';
import type { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build';
import type { BuildEnv, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode ?? 'development';
    const PORT = env.port ?? 3000;
    const apiUrl = env.apiUrl ?? 'http://localhost:8000';

    const isDev = mode === 'development';

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
