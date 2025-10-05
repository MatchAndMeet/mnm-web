import * as amplitude from '@amplitude/analytics-browser'

const AMPLITUDE_API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY

export const initAmplitude = () => {
    amplitude.init(AMPLITUDE_API_KEY, {
        defaultTracking: {
            sessions: true,
            pageViews: true,
            formInteractions: true,
            fileDownloads: false
        }
    })
}

export const trackEvent = (eventName, eventProperties = {}) => {
    amplitude.track(eventName, eventProperties)
}

export { amplitude }