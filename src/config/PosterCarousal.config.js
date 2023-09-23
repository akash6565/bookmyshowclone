const settings = {
    infinite: true,
    autoplay: false, // You can set this to true if you want the slider to autoplay
    slidesToShow: 4, // Adjust the number of slides to show based on your design
    slidesToScroll: 1, // Change this depending on how many slides you want to scroll at a time
    initialSlide: 0, // Corrected the typo in "InitialSlide" to "initialSlide"
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // You might want to change this based on your design
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Adjust this as needed
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  
  export default settings;
  