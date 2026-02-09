/**
 * Opens the appropriate app store based on the user's device.
 * - iOS devices: Opens App Store
 * - Android devices: Opens Play Store
 * - Desktop/other: Shows a choice or defaults to Play Store
 */

const APP_STORE_URL = 'https://apps.apple.com/br/app/ourmap/id6756722927?l=en-GB';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.ourmap.app';

type Platform = 'ios' | 'android' | 'unknown';

/**
 * Detects the user's platform based on user agent
 */
export function detectPlatform(): Platform {
    if (typeof navigator === 'undefined') return 'unknown';

    const userAgent = navigator.userAgent.toLowerCase();

    // Check for iOS devices (iPhone, iPad, iPod)
    if (/iphone|ipad|ipod/.test(userAgent)) {
        return 'ios';
    }

    // Check for Android devices
    if (/android/.test(userAgent)) {
        return 'android';
    }

    return 'unknown';
}

/**
 * Opens the appropriate app store based on the detected platform.
 * On desktop/unknown devices, opens Play Store as default.
 */
export function openAppStore(): void {
    const platform = detectPlatform();

    if (platform === 'ios') {
        window.open(APP_STORE_URL, '_blank');
    } else {
        // Android or desktop defaults to Play Store
        window.open(PLAY_STORE_URL, '_blank');
    }
}

/**
 * Returns the appropriate store URL based on the detected platform
 */
export function getAppStoreUrl(): string {
    const platform = detectPlatform();
    return platform === 'ios' ? APP_STORE_URL : PLAY_STORE_URL;
}

export { APP_STORE_URL, PLAY_STORE_URL };
