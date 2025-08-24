# EdTech Video Platform

A simple EdTech platform where learners can watch videos, add their own YouTube links, and manage a list of learning resources.  
Built with **React + Vite + TailwindCSS**

---

## Features
- Watch YouTube videos directly on the page  
- Add new videos (Name, Description, YouTube URL)  
- Select a video to play in the main player  
- Delete videos from the list  
- Profile avatar placeholder for future login 
- Persistent storage (save videos even after refresh) 

---

## Tech Stack
- [React](https://react.dev/) (with Vite)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Lucide Icons](https://lucide.dev/)  

---

## Setup & Installation

1. Clone the repository
```
git clone https://github.com/Swan-7/edtech-video-platform.git

cd edtech-video-platform
```

2. Install dependencies

```
npm install
```

3. Run the development server

```
npm run dev
```

The app will be available at:
[http://localhost:5173]

---

## How It Works

1. On load, the video player prompts the user to select a video.
2. Add a new video using the form (Name, Description, YouTube URL).
3. The video appears in the list with **Watch** and **Delete** buttons.
4. Clicking **Watch** loads the video in the player.
5. Clicking **Delete** removes the video from the list.

---

## Project Structure

```
src/
 ├── components/
 │    ├── VideoPlayer.jsx
 │    ├── VideoForm.jsx
 │    └── VideoList.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Future Improvements

* User authentication & profiles
* AI-powered video recommendations

---

## Author

Built for an AI powered EdTech by **Benita Daniel**

