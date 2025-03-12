import { useState } from "react";

const AnnouncementBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full py-3 text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="relative max-w-5xl px-10 mx-auto text-center">
        <p className="text-sm font-normal md:text-md">
          📣 Tailwind Master Kit: 100+ Professional, ready to embed{" "}
          <a
            className="font-semibold underline"
            href="https://tailwindmasterkit.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind Components
          </a>
        </p>
        <button
          className="absolute -translate-y-1/2 right-2 top-1/2"
          onClick={() => setVisible(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
