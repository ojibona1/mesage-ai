// DevBlock Sentinel SDK — auto-injected by DevBlock Console
import { DSentinel } from '@devblock/sentinel';

const sentinel = new DSentinel({
  apiKey: 'dbk_1cf4c7044c414fa0bd980685',
  serverUrl: 'https://api.devblocktechnologies.com',
  debug: process.env.NODE_ENV !== 'production',
});

// Auto-start — logs begin streaming immediately
sentinel.start();

// Track app lifecycle
sentinel.info('Application started', {
  project: 'Mesage Ai',
  environment: 'DEVELOPMENT'
});

// Export for manual use throughout your app
export { sentinel };
export default sentinel;
