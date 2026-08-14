'use client';

import React from 'react';

/**
 * List-view cell for the sponsors `website` field: renders a real clickable link
 * instead of raw text. stopPropagation keeps the click from also opening the row.
 */
export const WebsiteCell: React.FC<{ cellData?: unknown }> = ({ cellData }) => {
  const url = typeof cellData === 'string' ? cellData.trim() : '';
  if (!url) return <span style={{ opacity: 0.4 }}>—</span>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      title={url}
    >
      {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
    </a>
  );
};

export default WebsiteCell;
