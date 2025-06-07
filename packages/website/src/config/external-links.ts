/**
 * Centralized configuration for all external links used across the VRLY website.
 * This improves maintainability and ensures consistency across the application.
 */

export const EXTERNAL_LINKS = {
  // ClickUp Forms
  workflowAudit:
    "https://vrly.clickup.com/forms/9015749788/f/8cp2v4w-23155/YQIH9VQBCX4ZK47G0J",

  // Google Calendar
  bookingCalendar: "https://calendar.app.google/YvskWUUrNc474t6k8",

  // Phone Numbers
  phone: {
    number: "+4951193678551",
    display: "+49 511 936 785 51",
    link: "tel:+4951193678551",
  },

  // Email
  email: {
    address: "info@vrly.de",
    link: "mailto:info@vrly.de",
  },
} as const;

// Type-safe keys for external links
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
