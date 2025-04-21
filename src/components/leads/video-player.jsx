"use client";

function VideoPlayer({ src, className }) {
  return (
    <video src={src} className={`w-full h-full ${className}`} controls>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
