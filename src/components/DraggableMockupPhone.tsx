/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
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
  // const [currentlyPlaying, setCurrentlyPlaying] = useState<any>(null);

  // useEffect(() => {
  //   const authorizationCode = getAuthorizationCodeFromUrl();

  //   if (authorizationCode) {
  //     getAccessToken(authorizationCode)
  //       .then((accessToken) => {
  //         fetchCurrentlyPlaying(accessToken)
  //           .then((data) => {
  //             setCurrentlyPlaying(data);
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching currently playing song:", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching access token:", error);
  //       });
  //   }
  // }, []);

  return (
    <div className="select-none mockup-phone cursor-grab active:cursor-grabbing">
      <div className="camera" />
      <div className="display">
        <div
          aria-label="Scrollable content"
          className="h-[600px] p-4 space-y-4 overflow-x-hidden overflow-y-auto artboard artboard-demo phone-1 bg-gray-50 dark:bg-neutral-900"
          role="button"
          tabIndex={0}
        >
          <Image
            alt="Woman listening to music"
            className="object-cover pointer-events-none select-none"
            draggable={false}
            src="public\202010300.jpg"
          />
          <div>
            <p className="text-2xl text-neutral-900 dark:text-whitetext-neutral-900 dark:text-white">
              {siteConfig.name}
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300">
              {siteConfig.role}
            </p>
            {/* {currentlyPlaying ? (
              <>
                <Image
                  alt={currentlyPlaying.item.name}
                  className="object-cover pointer-events-none select-none"
                  draggable={false}
                  src={currentlyPlaying.item.album.images[0].url}
                />
                <div>
                  <p className="text-2xl text-neutral-900 dark:text-whitetext-neutral-900 dark:text-white">
                    {currentlyPlaying.item.name}
                  </p>
                  <p className="text-lg text-neutral-700 dark:text-gray-300">
                    {currentlyPlaying.item.artists
                      .map((artist: any) => artist.name)
                      .join(", ")}
                  </p>
                  <p className="text-lg text-neutral-700 dark:text-gray-300">
                    Now Playing on Spotify
                  </p>
                </div>
              </>
            ) : (
              <div>Nothing is currently playing.</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
