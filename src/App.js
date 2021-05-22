import useRecorder from "./useRecorder";
import "./App.css";

function App() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <div className="App">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
      <p>audioURL: {audioURL}</p>
    </div>
  );
}

export default App;
