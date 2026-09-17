import type React from 'react';

/**
 * =========================================================================
 * SMART LINK CONFIGURATION
 * =========================================================================
 * Replace this single variable to automatically update every CTA button
 * across the entire landing page.
 */
export const SMART_LINK_URL =
  "https://www.profitableratecpmnetwork.com/vvbdqrp4?key=c77ca6a811ac13b05154cf794fe7858b";

/**
 * Clean, safe click tracking function.
 * Logs the specific CTA trigger and redirects to the configured Smart Link.
 * Does not collect any sensitive personal info.
 */
export function handleSmartLinkClick(buttonName: string, event?: React.MouseEvent) {
  if (event) {
    event.preventDefault();
  }

  // Debug-safe event logging
  console.info(`[SmartLink Tracker] CTA Triggered: ${buttonName}`);

  if (typeof window !== "undefined") {
    try {
      // Dispatch custom event for external analytics/tag managers if present
      window.dispatchEvent(
        new CustomEvent("smartlink_click", {
          detail: {
            button: buttonName,
            url: SMART_LINK_URL,
            timestamp: Date.now(),
          },
        })
      );
    } catch {
      // Silent pass if CustomEvent is restricted
    }

    // Direct, reliable navigation compatible with mobile webviews and browsers
    window.location.href = SMART_LINK_URL;
  }
}
