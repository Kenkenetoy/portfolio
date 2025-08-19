/* eslint-disable prettier/prettier */
import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Image } from "@heroui/image"; // Import the image component

import { siteConfig } from "@/config/site"; // Your config file for site settings

// Function to extract the authorization code from the URL
const getAuthorizationCodeFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get("code");
};

// Function to fetch the access token from Spotify
const getAccessToken = async (authorizationCode: string) => {
  const url = "https://accounts.spotify.com/api/token";

  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("code", authorizationCode);
  params.append("redirect_uri", "http://localhost:5174/callback");
  params.append("client_id", "1e745dbf9435458ba7ea659d311759dd");
  params.append("client_secret", "99d22a3332e54f1384625e259d3a18e7");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await response.json();

  return data.access_token;
};

// Function to fetch the currently playing song from Spotify
const fetchCurrentlyPlaying = async (accessToken: string) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    console.error("Error fetching current playing song:", response.statusText);
    throw new Error("Failed to fetch current playing song");
  }

  const data = await response.json();

  console.log("Currently Playing Response:", data); // Log the response

  return data;
};

export const DraggableMockupPhone = () => {
  const [setCurrentlyPlaying] = useState<any>(null);
  // Autoplay & progress state
  const AUTOPLAY_DELAY = 4000; // ms
  const swiperRef = useRef<any>(null);
  // const [activeIndex, setActiveIndex] = useState(0); // unused but kept for future use
  const [progress, setProgress] = useState(0); // 0..1
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const slideStartRef = useRef<number | null>(null);
  
  // Drag state tracking
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const pausedProgressRef = useRef<number>(0); // Store progress when paused
  const pausedTimeRef = useRef<number | null>(null); // When we paused
  
  // Manual pause/play state
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const tick = useCallback((t: number) => {
    if (!lastTimestampRef.current) lastTimestampRef.current = t;
    // update last timestamp for next frame
    lastTimestampRef.current = t;

    // Only update progress if not dragging and autoplay is running and not manually paused
    if (!isDragging && !isManuallyPaused && swiperRef.current && swiperRef.current.autoplay && swiperRef.current.autoplay.running && slideStartRef.current) {
      // Use per-slide start timestamp to compute progress
      const sinceStart = t - slideStartRef.current;
      const pct = Math.min(1, Math.max(0, sinceStart / AUTOPLAY_DELAY));
      setProgress(pct);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [isDragging, isManuallyPaused, progress]);

  useEffect(() => {
    // start RAF
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [tick]);

  useEffect(() => {
    const authorizationCode = getAuthorizationCodeFromUrl();

    if (authorizationCode) {
      // Fetch access token from the authorization code
      getAccessToken(authorizationCode)
        .then((accessToken) => {
          // Fetch currently playing song from Spotify API
          fetchCurrentlyPlaying(accessToken)
            .then((data) => {
              setCurrentlyPlaying(data);
            })
            .catch((error) => {
              console.error("Error fetching currently playing song:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching access token:", error);
        });
    }
  }, []);

  // Handle autoplay state changes based on manual pause
  useEffect(() => {
    if (swiperRef.current?.autoplay) {
      if (isManuallyPaused) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isManuallyPaused]);

  // Manual pause/play toggle function
  const togglePausePlay = () => {
    console.log('Toggle clicked, current state:', isManuallyPaused);
    if (isManuallyPaused) {
      // Resume
      console.log('Resuming...');
      setIsManuallyPaused(false);
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
      // Adjust slideStart to account for paused time
      if (pausedTimeRef.current) {
        const pausedDuration = performance.now() - pausedTimeRef.current;
        slideStartRef.current = (slideStartRef.current || performance.now()) + pausedDuration;
        pausedTimeRef.current = null;
      }
    } else {
      // Pause
      console.log('Pausing...');
      setIsManuallyPaused(true);
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.stop();
      }
      pausedProgressRef.current = progress;
      pausedTimeRef.current = performance.now();
    }
  };

  // Profile header component for each slide (like IG Reels/FB Stories)
  // Pass 'bottom' (default true) to control placement
  // Pass 'bottom' (default true) and 'date' (optional string) to control placement and date
  type ProfileHeaderProps = {
    bottom?: boolean;
    date?: string;
  };

  const ProfileHeader = ({ bottom = true, date }: ProfileHeaderProps) => (
    <div
      className={`absolute left-0 z-20 flex items-center w-full gap-2 p-4 pt-8 ${bottom ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} from-black/50 to-transparent ${bottom ? 'bottom-0' : 'top-0'}`}
    >
      <Image
        alt={`${siteConfig.name}'s Profile Picture`}
        className="object-cover w-10 h-10 border-2 rounded-full border-white/30"
        draggable={false}
        src={siteConfig.logo}
      />
      <div className="flex-1">
        <p className="text-sm text-white w-fit">{siteConfig.name}</p>
        {/* <p className="text-xs text-white w-fit">{siteConfig.role}</p> */}
        {/* Date like in Reels, only if provided */}
        {date && (
          <p className="text-xs text-white w-fit">
            {date}
          </p>
        )}
      </div>
      {/* Pause/Play button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          togglePausePlay();
        }}
        className="p-2 ml-2 transition-opacity duration-200 rounded-full pointer-events-auto bg-black/50 hover:bg-black backdrop-blur-sm"
        aria-label={isManuallyPaused ? "Play" : "Pause"}
        style={{ pointerEvents: 'auto' }}
      >
        {isManuallyPaused ? (
          // Play icon
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          // Pause icon
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
    </div>
  );

  // Array of slide components - easily add new slides here
  const slides = [
    // Slide 2: Image Showcase
    <div key="image-showcase" className="relative flex items-center justify-center w-full h-full bg-black">
      <ProfileHeader bottom={false} date="28/05/2025"/>
      <Image
        alt="Portfolio Showcase Image"
        className="object-cover w-full h-full"
        height={560}
        draggable={false}
        src="/500767421_122101628294889306_499058726028971638_n.webp"
      />
    </div>,
    // Slide 3: Handorf
    <div key="image-showcase" className="relative flex items-center justify-center w-full h-full bg-black">
      <ProfileHeader bottom={false} date="14/04/2023"/>
      <Image
        alt="Portfolio Showcase Image"
        className="object-cover w-full h-full"
        height={560}
        draggable={false}
        src="/unnamed.webp"
      />
    </div>,
    // Slide 4: Sydney bridge
    <div key="image-showcase" className="relative flex items-center justify-center w-full h-full bg-black">
      <ProfileHeader bottom={false} date="18/04/2023" />
      <Image
        alt="Portfolio Showcase Image"
        className="object-cover w-full h-full"
        height={560}
        draggable={false}
        src="/339638376_1064728391582143_6807557032942108900_n.webp"
      />
    </div>,
    // Slide 5: Grad day
    <div key="image-showcase" className="relative flex items-center justify-center w-full h-full bg-black">
      <ProfileHeader bottom={false} date="12/06/2025" />
      <Image
        alt="Graduation Day Image"
        className="object-cover w-full h-full"
        height={560}
        draggable={false}
        src="/1e8f553f-44eb-4456-a3b7-056fd35d7c05.webp"
        style={{ objectPosition: "30% top" }}
      />
    </div>,
    // Slide 1: Personal Info Card
    <div key="profile" className="relative flex flex-col items-center justify-center w-full h-full p-6 bg-">
      <Image
        alt={`${siteConfig.name}'s Profile Picture`}
        className="object-cover w-40 h-40 mb-4 border-4 rounded-full shadow-md border-white/20"
        draggable={false}
        src={siteConfig.logo}
      />
      <div className="flex flex-col items-center w-full text-center text-default-foreground">
        <h2 className="mb-1 text-2xl font-bold">{siteConfig.name}</h2>
        <p className="mb-2 text-md ">{siteConfig.role}</p>
        {/* <p className="mb-2 text-sm ">Full-stack developer. Building cool stuff. 🚀</p> */}
        {/* <div className="flex justify-center gap-4 mb-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconBrandGithub className="w-5 h-5 hover:brightness-150" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconBrandLinkedin className="w-5 h-5 hover:brightness-150" />
          </a>
        </div> */}
        {/* <button className="px-4 py-2 mt-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700">Follow</button> */}
      </div>
    </div>,
    // Add more slides here easily...
  ];

  return (
    <div className="h-full shadow-2xl select-none mockup-phone cursor-grab active:cursor-grabbing">
      <div className="camera" />
      <div className="display">
        <div
          aria-label="Scrollable content"
          className="relative h-[600px] overflow-y-auto artboard artboard-demo phone-1 bg-default-50"
          role="button"
          tabIndex={0}
        >
          <section
            className="w-full h-full embla"
            style={{
              '--slide-height': '100%',
              '--slide-spacing': '0rem',
              '--slide-size': '100%',
            } as React.CSSProperties}
          >
            <Swiper
              direction="vertical"
              slidesPerView={1}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: AUTOPLAY_DELAY,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              onSwiper={(s) => {
                swiperRef.current = s;
                slideStartRef.current = performance.now();
              }}
              onSlideChange={(s) => {
                const newIndex = s.realIndex ?? s.activeIndex ?? 0;
                
                // If we changed slides, reset timer
                if (newIndex !== currentSlideIndex) {
                  setCurrentSlideIndex(newIndex);
                  setProgress(0);
                  slideStartRef.current = performance.now();
                  pausedProgressRef.current = 0;
                } else {
                  // Same slide - resume from where we left off if we were dragging
                  if (isDragging && pausedTimeRef.current) {
                    // Adjust slideStart to account for paused time
                    const pausedDuration = performance.now() - pausedTimeRef.current;
                    slideStartRef.current = (slideStartRef.current || performance.now()) + pausedDuration;
                  }
                }
              }}
              onTouchStart={() => {
                // User started dragging
                setIsDragging(true);
                pausedProgressRef.current = progress;
                pausedTimeRef.current = performance.now();
                
                // Pause autoplay
                if (swiperRef.current?.autoplay) {
                  swiperRef.current.autoplay.stop();
                }
              }}
              onTouchEnd={() => {
                // User stopped dragging
                setIsDragging(false);
                
                // Resume autoplay
                if (swiperRef.current?.autoplay) {
                  swiperRef.current.autoplay.start();
                }
              }}
              className="w-full h-full overflow-hidden embla__viewport"
              style={{ height: '100%', width: '100%' }}
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full h-full embla__slide"
                  style={{ width: '100%', height: '100%' }}
                >
                  {slideContent}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Full-width thin progress bar (YouTube-like) */}
            <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none">
              <div className="w-full h-1 bg-white/20">
                <div
                  className="h-1 bg-white"
                  style={{ width: `${Math.round(progress * 100)}%`, transition: 'width 120ms linear' }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

