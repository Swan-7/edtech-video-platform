import { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoForm from "./components/VideoForm";
import VideoList from "./components/VideoList";
import { GraduationCap, UserCircle } from "lucide-react";

export interface Video {
  id: string;
  name: string;
  description: string;
  url: string;
}

function App() {
  const [videos, setVideos] = useState<Video[]>(() => {
    const saved = localStorage.getItem("videos");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const addVideo = (video: Video) => {
    setVideos((prev) => [...prev, video]);
    if (!currentVideo) setCurrentVideo(video.url);
  };

  const deleteVideo = (id: string) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
    if (currentVideo && videos.find((v) => v.id === id)?.url === currentVideo) {
      setCurrentVideo(null);
    }
  };

  const watchVideo = (url: string) => {
    setCurrentVideo(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center p-4 mb-8 bg-white rounded-xl shadow-md border border-gray-100 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-blue-600 mt-1" />
          EdTech Video Platform
        </h1>

        <UserCircle className="w-9 h-9 mb-5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </header>

      <div className="max-w-4xl mx-auto mb-8">
        <VideoPlayer url={currentVideo} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <VideoForm onAdd={addVideo} />
        <VideoList videos={videos} onWatch={watchVideo} onDelete={deleteVideo} />
      </div>
    </div>
  );
}

export default App;
