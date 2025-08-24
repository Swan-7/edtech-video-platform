import { PlaySquare } from "lucide-react";

interface Props {
  url: string | null;
}

const extractVideoId = (url: string) => {
  const regex = /(?:v=|\.be\/)([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default function VideoPlayer({ url }: Props) {
  const videoId = url ? extractVideoId(url) : null;

  return (
    <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
      {videoId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allowFullScreen
        />
      ) : (
        <p className="flex items-center justify-center h-full text-gray-500">
          <PlaySquare className="w-8 h-8 mr-2 text-blue-600 animate-pulse" />
          Select a video to start watching
        </p>
      )}
    </div>
  );
}
