import { defineConfig } from '@meteorjs/rspack';

/**
 * Rspack configuration for Meteor projects.
 *
 * Provides typed flags on the `Meteor` object, such as:
 * - `Meteor.isClient` / `Meteor.isServer`
 * - `Meteor.isDevelopment` / `Meteor.isProduction`
 * - …and other flags available
 *
 * Use these flags to adjust your build settings based on environment.
 */
export default defineConfig((/* Meteor */) => {
  // Intentionally empty. TsCheckerRspackPlugin belongs here to type-check at
  // build time, and `ts-checker-rspack-plugin` is kept in devDependencies for
  // that purpose — but on Meteor 3.5.x its async pass rewrites the
  // `rspack-server-build-id` marker in _build/main-dev/server-meteor.js, which
  // restarts the server and triggers the next pass: an endless rebuild loop.
  // Blocked upstream by meteor/meteor#14769; restore once Meteor 3.6 ships.
  // Until then types are checked by `meteor npm run typecheck`.
  return {};
});
