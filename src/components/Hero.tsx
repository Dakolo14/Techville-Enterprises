"use client";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0a1525]/95 via-[#0a1525]/90 to-[#0a1525]/95">
        {/* You can replace this with an actual video or background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-24 pb-20">
        {/* Play Button */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setShowVideo(true)}
            className="w-16 h-16 rounded-full border-4 border-[#ff4444] bg-[#1a2332] hover:bg-[#ff4444] transition-all duration-300 flex items-center justify-center group relative animate-pulse"
          >
            <div className="absolute inset-0 rounded-full border-4 border-[#ff4444] animate-ping opacity-20"></div>
            <FaPlay className="text-white text-lg ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
          WELCOME TO
          <br />
          <span className="text-[#0866ff]">TECHVILLE ENTERPRISES</span>
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-1 mb-6">
          <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
          <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
          <div className="w-12 h-0.5 bg-[#0866ff]"></div>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Fermentum volutpatlbus! Vero cupiditate suscipit sem placeat. Lacinia
          numquam placeat velit, mollitia, fringilla aliquid massa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#0866ff] text-white text-[13px] px-6 py-2.5 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 min-w-40">
            GET SERVICE
          </button>
          <button className="bg-transparent border-2 border-white text-white text-[13px] px-6 py-2.5 rounded font-semibold hover:bg-white hover:text-[#0a1525] transition-all hover:scale-105 min-w-40">
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#0866ff] transition-colors"
          >
            &times;
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
