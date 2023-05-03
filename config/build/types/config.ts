import { Configuration } from 'webpack';

export interface BuildPaths {
  entry: string;
  output: string;
  template: string;
  src: string;
}

export interface BuildEnv {
  mode: Configuration['mode'];
  port: number;
  apiUrl: string
}

export interface BuildOptions {
  mode: Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
