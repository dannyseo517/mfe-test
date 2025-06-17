import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [],
  shared: (packageName: string) => {
    if (packageName === 'react') {
      return {
        singleton: true,
        eager: true,
        requiredVersion: '^19.0.0',
      };
    }
    if (packageName === 'react-dom') {
      return {
        singleton: true,
        eager: true,
        requiredVersion: '^19.0.0',
      };
    }
    return undefined;
  }
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
