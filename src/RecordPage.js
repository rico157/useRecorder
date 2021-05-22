import React, { useEffect, useState } from "react";
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

const RecordPage = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    (async () => {
      let stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      let recorder = new RecordRTCPromisesHandler(stream, {
        type: "audio",
        recorderType: RecordRTC.StereoAudioRecorder,
      });
      recorder.startRecording();
      const sleep = (m) => new Promise((r) => setTimeout(r, m));
      await sleep(3000);
      await recorder.stopRecording();
      let blob = await recorder.getBlob();
      URL.createObjectURL(blob);
      let data = await recorder.getDataURL();
      setState(data);
    })();
  }, []);

  return (
    <div>
      {JSON.stringify(state)}
      {state && (
        <audio
          controls="controls"
          preload="none"
          src={state}
          type="audio/wav"
        />
      )}
      dataavailable
    </div>
  );
};

export default RecordPage;
