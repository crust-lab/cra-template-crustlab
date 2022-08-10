const SentryCli = require('@sentry/cli');
require('dotenv').config();

async function createReleaseAndUpload() {
  const release = process.env.REACT_APP_SENTRY_RELEASE;
  const token = process.env.REACT_APP_SETNRY_AUTH_TOKEN;
  if (!release) {
    console.warn('REACT_APP_SENTRY_RELEASE is not set');
    return;
  }

  if (!token) {
    console.warn('REACT_APP_SETNRY_AUTH_TOKEN is not set');
    return;
  }

  process.env['SENTRY_AUTH_TOKEN'] = token;
  const cli = new SentryCli();

  try {
    console.log('Creating sentry release ' + release);
    await cli.releases.new(release);

    console.log('Uploading source maps');
    await cli.releases.uploadSourceMaps(release, {
      include: ['build/static/js'],
      urlPrefix: '~/static/js',
      rewrite: false,
    });

    console.log('Finalizing release');
    await cli.releases.finalize(release);
  } catch (e) {
    console.error('Source maps uploading failed:', e);
  }
}

createReleaseAndUpload();
