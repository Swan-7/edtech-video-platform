import { useState } from "react";
import type  { Video } from "../App";
import { Plus } from "lucide-react";

interface Props {
  onAdd: (video: Video) => void;
}

export default function VideoForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;

    const newVideo: Video = {
      id: Date.now().toString(),
      name,
      description,
      url,
    };

    onAdd(newVideo);
    setName("");
    setDescription("");
    setUrl("");
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-100"
        >
        <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
             <Plus className="w-5 h-5" />
              Add New Video
        </h2>

        <input
            type="text"
            placeholder="Video Name"
            className="w-full border p-2 bg-gray-200 text-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />

        <textarea
            placeholder="Description"
            className="w-full border p-2 bg-gray-200 text-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />

        <input
            type="text"
            placeholder="YouTube URL"
            className="w-full border p-2 bg-gray-200 text-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
        />

        <button
            type="submit"
            className="w-full bg-blue-600 text-blue-100 py-2 rounded hover:bg-blue-700 transition"
        >
            Add Video
        </button>
    </form>

  );
}
