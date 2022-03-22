import { forwardRef } from "react";

const MyVideo = forwardRef((props, ref) => {
  return (
    <video ref={ref} width="320" height="240" controls>
      <source
        src="https://download.samplelib.com/mp4/sample-5s.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
});


export default MyVideo;