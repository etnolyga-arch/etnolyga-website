'use client';

import React from 'react';

/**
 * Adds a "view the public site" link to the admin sidebar.
 *
 * Payload ships no way back to the front end, so editors had to hand-edit the
 * URL to drop /admin. Opens in a new tab so unsaved admin work is never lost.
 */
export const ViewSiteLink: React.FC = () => (
  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '1.5rem 0 0',
      paddingTop: '1rem',
      borderTop: '1px solid var(--theme-elevation-100)',
      color: 'var(--theme-elevation-600)',
      textDecoration: 'none',
      fontSize: '0.9rem',
    }}
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
    Peržiūrėti svetainę
  </a>
);

export default ViewSiteLink;
