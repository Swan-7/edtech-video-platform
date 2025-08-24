import type { Video } from "../App";
import { Video as VideoIcon } from "lucide-react";

interface Props {
  videos: Video[];
  onWatch: (url: string) => void;
  onDelete: (id: string) => void;
}

export default function VideoList({ videos, onWatch, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
             <VideoIcon className="w-6 h-6" />
             Video List
        </h2>
        {videos.length === 0 ? (
            <p className="text-gray-500">No videos added yet</p>
        ) : (
            <ul className="space-y-4">
            {videos.map((video) => (
                <li key={video.id} className="flex justify-between items-start border-b pb-3">
                <div className="mr-5">
                    <h3 className="font-medium text-gray-800">{video.name}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                </div>
                <div className="flex gap-2">
                    <button
                    onClick={() => onWatch(video.url)}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200"
                    >
                    Watch
                    </button>
                    <button
                    onClick={() => onDelete(video.id)}
                    className="bg-blue-900 px-3 py-1 rounded hover:bg-blue-700"
                    >
                    Delete
                    </button>
                </div>
                </li>
            ))}
            </ul>
        )}
    </div>
  );
}
