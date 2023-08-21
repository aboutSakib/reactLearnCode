// import SavaIcon from "@mui/icons-material/Save";
// import { Button, Grid } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Button endIcon={<SavaIcon />} variant="contained" color="secondary">
//           Click Me
//         </Button>
//         <Grid container spacing={2}>
//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>
//         </Grid>
//         {/* <Card>
//           <Card.Img
//             src="https://picsum.photos/200"
//             style={{ width: "100px" }}
//           />

//           <>
//             <Form.Control size="lg" type="text" placeholder="Large text" />
//             <br />
//             <Form.Control type="text" placeholder="Normal text" />
//             <br />
//             <Form.Control size="sm" type="text" placeholder="Small text" />
//           </>
//         </Card> */}

//         {/* <Alert variant="success">hey</Alert>
//         <Button variant="danger"> Click Me</Button> */}
//         {/* <h1>Router</h1> */}
//         {/* <Navbar /> */}
//         {/* Define your routes */}
//         {/* <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user/:userName" element={<User />} />
//         </Routes> */}
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
