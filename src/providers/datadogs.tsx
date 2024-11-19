import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum, DefaultPrivacyLevel } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: process.env.DATADOG_APPLICATION_ID as string,
  clientToken: process.env.DATADOG_CLIENT_TOKEN as string,
  allowedTracingUrls: [/https:\/\/.*\.inaku\.go\.id/],
  site: process.env.DATADOG_SITE_NAME as string,
  service: process.env.DATADOG_SERVICE_NAME as string,
  env: process.env.DATADOG_DEFAULT_ENV as string,
  sessionSampleRate: process.env.DATADOG_SESSION_SAMPLE_RATE
    ? (parseInt(process.env.DATADOG_SESSION_SAMPLE_RATE) as number)
    : 0,
  sessionReplaySampleRate: process.env.DATADOG_SESSION_REPLAY_SAMPLE_RATE
    ? (parseInt(process.env.DATADOG_SESSION_REPLAY_SAMPLE_RATE) as number)
    : 0,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: process.env.DATADOG_PRIVACY_LEVEL as DefaultPrivacyLevel,
});

datadogLogs.init({
  clientToken: process.env.DATADOG_CLIENT_TOKEN as string,
  site: process.env.DATADOG_SITE_NAME as string,
  service: process.env.DATADOG_SERVICE_NAME as string,
  env: process.env.DATADOG_DEFAULT_ENV as string,
  forwardErrorsToLogs: Boolean(process.env.DATADOG_FORWARD_ERRORS_TO_LOGS),
  sessionSampleRate: process.env.DATADOG_SESSION_SAMPLE_RATE
    ? (parseInt(process.env.DATADOG_SESSION_SAMPLE_RATE) as number)
    : 0,
});

export default function DatadogInit() {
  return null;
}
