// import React, { useState } from 'react';
// import { AudioVisualizer } from 'react-audio-visualize';

// const Beat = () => {
//   const [blob, setBlob] = useState<Blob>();
//   const visualizerRef = useRef<HTMLCanvasElement>(null)
//   const playAudio = (track) => {
//     setSelectedTrack(track);
//   };
//   // set blob somewhere in code

//   return (
//     <div>
//       {blob && (
//         <AudioVisualizer
//           ref={visualizerRef}
//           blob={blob}
//           width={500}
//           height={75}
//           barWidth={1}
//           gap={0}
//           barColor={'#f76565'}
//         />
//       )}
//     </div>
//   )
// }
