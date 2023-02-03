import path from 'path'
import type { Configuration } from 'webpack'
import { buildWebpackConfig } from './config/build'
import type { BuildEnv, BuildPaths } from './config/build/types';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        template: path.resolve(__dirname, 'public', 'index.html')
    }
    
    const mode = env.mode ?? 'development'
    const PORT = env.port ?? 3000
    
    const isDev = mode === 'development'
    
    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
}