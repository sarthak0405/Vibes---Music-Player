// // Join.js
// // Join.js
// import React, { useState } from "react";
// import Chat from "../Chat/Chat";

// const Join = () => {
//   const [username, setUsername] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const sendUser = () => {
//     setUsername(document.getElementById("userinput").value);
//     setShowChat(true);
//   };

//   return (
//     <div className="joinpg">
//       {showChat ? (
//         <Chat username={username} />
//       ) : (
//         <>
//           <button onClick={sendUser}>Click Me</button>
//           <input
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             id="userinput"
//             placeholder="Enter your username"
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Join;

// import React, { useState } from "react";
// import Chat from "../Chat/Chat";

// const Join = () => {
//   const [username, setUsername] = useState("");
//   const [joined, setJoined] = useState(false);

//   const sendUser = () => {
//     setUsername(document.getElementById("userinput").value);
//     setJoined(true);
//   };

//   return (
//     <div className="joinpg">
//       {joined && <Chat username={username} />}
//       {!joined && (
//         <>
//           <h1>Join Component Content</h1>
//           <button onClick={sendUser}>Click Me</button>
//           <input
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             id="userinput"
//             placeholder="Enter your username"
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Join;

// Join.js
import React, { useState } from "react";
import Chat from "../Chat/Chat";

const Join = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  const sendUser = () => {
    setUsername(document.getElementById("userinput").value);
    setJoined(true);
  };

  return (
    <div className="joinpg">
      {!joined ? (
        <>
          <input
            style={{ borderRadius: "12px", color: "black" }}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="userinput"
            placeholder="Enter your Nikname"
          />
          <button onClick={sendUser} style={{ color: "black" }}>
            Click Me
          </button>
        </>
      ) : (
        <div>
          <Chat username={username} />
        </div>
      )}
    </div>
  );
};

export default Join;

// // import React, { useState } from "react";
// // import Chat from "../Chat/Chat"; // Assuming Chat is your Chat component

// // const Join = () => {
// //   const [showChat, setShowChat] = useState(false);

// //   const senduser = () => {
// //     setShowChat(true); // Set showChat to true when button is clicked
// //   };

// //   return (
// //     <div className="joinpg">
// //       <h1>Join Component Content</h1>
// //       {showChat ? (
// //         <Chat />
// //       ) : (
// //         <>
// //           <button onClick={senduser}>Click Me</button>
// //           <input type="text" id="userinput" placeholder="Enter your name" />
//         </>
//        )}
//     </div>
//   );
//  };

//  export default Join;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Chat from "../Chat/Chat"; // Assuming Chat is your Chat component

// const Join = () => {
//   const [name, setName] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const senduser = () => {
//     setName(document.getElementById("userinput").value);
//     setShowChat(true); // Set showChat to true when button is clicked
//   };

//   return (
//     <>
//       <div className="joinpg">
//         <h1>Join Component Content</h1>
//         {showChat ? (
//           <Chat />
//         ) : (
//           <>
//             <button onClick={senduser}>Click Me</button>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               id="userinput"
//             />
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Join;
