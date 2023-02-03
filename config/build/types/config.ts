import { Configuration } from "webpack";

export interface BuildPaths {
    entry: string,
    output: string,
    template: string
}

export interface BuildEnv {
    mode: Configuration['mode'],
    port: number
}

export interface BuildOptions {
    mode: Configuration['mode'],
    paths: BuildPaths,
    isDev: boolean,
    port: number
}