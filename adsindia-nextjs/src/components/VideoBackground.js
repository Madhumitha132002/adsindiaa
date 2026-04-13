'use client';
import React from 'react';

// VideoBackground replaced with a lightweight decorative gradient overlay
const VideoBackground = ({ overlayOpacity = 0.05, overlayColor = 'bg-slate-50' }) => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Static blue-purple gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-blue-500/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[75%] bg-violet-500/8 rounded-full blur-[90px]" />
      <div
        className={`absolute inset-0 z-1 ${overlayColor}`}
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground;
