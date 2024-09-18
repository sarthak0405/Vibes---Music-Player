import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import beat3 from "../Assets/beat3.webp";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/logo.png";
import avatar from "../Assets/avatar.png";

const Navi = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        variant="dark"
        style={{
          backgroundImage:
            "linear-gradient(to right,black,rgb(81, 0, 81),black)",
          height: "90px",
        }}
      >
        <Container fluid className="innercontain">
          <Navbar.Brand href="#">
            <img src={logo} className="navlogo"></img>
            <img src={beat3} height={"40px"} width={"100px"}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            <div className="navcontentdiv mt-2">
              <Nav.Link href="#action1">
                <p
                  className="navcontent"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "17px",
                    color: "black",
                    fontWeight: "bolder",
                    padding: "3px",
                  }}
                >
                  Explore Premium
                </p>
              </Nav.Link>
              <Nav.Link href="#action1">
                <p
                  className="navcontent"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-bell"
                    style={{ color: "black" }}
                  ></i>
                </p>
              </Nav.Link>
              <Nav.Link href="#action1">
                <p
                  className="navcontent"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-people-line"
                    style={{ color: "black" }}
                  ></i>
                </p>
              </Nav.Link>
              <Nav.Link href="#action1">
                <p className="navcontent">
                  {" "}
                  <NavDropdown
                    title={
                      <img src={avatar} className="navavatar" alt="Dropdown" />
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Log-in with Premium
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
                  </NavDropdown>
                </p>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navi;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import beat3 from "../Assets/beat3.webp";
// import { Container, Row, Col } from "react-bootstrap";

// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../Assets/logo.png";
// import avatar from "../Assets/avatar.png";

// const Navi = () => {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary" variant="dark">
//         <Container fluid className="innercontain">
//           <NavDropdown
//             title={<img src={avatar} className="navavatar" alt="Dropdown" />}
//             id="navbarScrollingDropdown"
//           >
//             <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
//             <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
//             <NavDropdown.Item href="#action3">
//               Log-in with Premium
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
//           </NavDropdown>

//           <Navbar.Brand href="#">
//             <img src={logo} className="navlogo"></img>
//             <img src={beat3} height={"40px"} width={"100px"}></img>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             ></Nav>
//             {/* <Form className="d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//               </Form> */}
//             <div className="navcontentdiv mt-2">
//               <Nav.Link href="#action1">
//                 <p
//                   className="navcontent"
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "17px",
//                     color: "black",
//                     fontWeight: "bolder",
//                     padding: "3px",
//                   }}
//                 >
//                   Explore Premium
//                 </p>
//               </Nav.Link>
//               <Nav.Link href="#action1">
//                 <p
//                   className="navcontent"
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     height: "30px",
//                     width: "30px",
//                     textAlign: "center",
//                   }}
//                 >
//                   <i
//                     className="fa-solid fa-bell"
//                     style={{ color: "black" }}
//                   ></i>
//                 </p>
//               </Nav.Link>
//               <Nav.Link href="#action1">
//                 <p
//                   className="navcontent"
//                   style={{
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                     height: "30px",
//                     width: "30px",
//                     textAlign: "center",
//                     color: "black",
//                   }}
//                 >
//                   {" "}
//                   <i
//                     className="fa-solid fa-people-line"
//                     style={{ color: "black" }}
//                   ></i>
//                 </p>
//               </Nav.Link>
//               <Nav.Link href="#action1">
//                 <p className="navcontent">
//                   {" "}
//                   <NavDropdown
//                     title={
//                       <img src={avatar} className="navavatar" alt="Dropdown" />
//                     }
//                     id="navbarScrollingDropdown"
//                   >
//                     <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
//                     <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
//                     <NavDropdown.Item href="#action3">
//                       Log-in with Premium
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Settings
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
//                   </NavDropdown>
//                 </p>
//               </Nav.Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Navi;
