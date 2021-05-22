import "./App.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect } from "react";

function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      video: false,
      audio: true,
      blobPropertyBag: {
        type: "audio/mp3",
      },
    });

  useEffect(() => {
    (async () => {
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      let recorder = new RecordRTCPromisesHandler(stream, {
        type: "video",
      });
      recorder.startRecording();

      const sleep = (m) => new Promise((r) => setTimeout(r, m));
      await sleep(3000);

      await recorder.stopRecording();
      let blob = await recorder.getBlob();
      invokeSaveAsDialog(blob);
    })();
  });

  return (
    <div className="App">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio controls>
        <source src={mediaBlobUrl} type="audio/mp3"></source>
      </audio>
      <button onClick={startRecording} disabled={status === "recording"}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={status === "stopped"}>
        stop recording
      </button>
      <p>status: {status}</p>
      <p>mediaBlobUrl: {mediaBlobUrl}</p>
      <p>v: source mp3 fixed</p>
    </div>
  );
}

export default App;
