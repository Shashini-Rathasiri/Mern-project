import StarIcon from "@mui/icons-material/Star";
 import video from "../HomePageComponents/video1.mp4";



const HomeTopSection = () => {
  return (


    <section className="home_top_section">
      <br></br>
       <div className="video"></div>
      <video src ={video} muted autoPlay loop type ="video1/mp4" width= "100%"
  height="100%" position ="absolute" top="0" bottom="0" object-fit="cover"></video> 
           

      <div className="home_top_welcome">
        <h3>WELCOME
        </h3>
        <br></br>
        <br></br>
        <h1>GoldShey Gemstone & Jewelry Accessories </h1>
        <div className="home_top_bottom_section">
          {/* <div className="home_top_horizontal_line"></div>
          <StarIcon
            sx={{
              marginTop: "12px",
              color: "#ffd700",
            }}
          />
          <div className="home_top_horizontal_line"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeTopSection;
