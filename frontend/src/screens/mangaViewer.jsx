import React, { useState, useEffect } from "react";


const chapter=['001.jpg','002.png','003.png','004.jpg','005.jpg','006.jpg','007.jpg','008.png'
,'009.jpg','010.jpg','011.jpg','012.jpg','013.jpg','014.png','015.jpg','016.png','017.jpg','018.jpg'
,'019.png','020.jpg','021.jpg','022.jpg','023.jpg','024.png','025.png','026.jpg','027.jpg', 
  '028.jpg', '029.jpg', '030.jpg',
  '031.jpg', '032.jpg', '033.png', '034.jpg', '035.jpg', '036.jpg',
  '037.jpg', '038.jpg', '039.jpg', '040.jpg', '041.jpg', '042.jpg',
  '043.jpg', '044.png', '045.jpg', '046.jpg', '047.jpg', '048.jpg',
  '049.jpg', '050.jpg', '051.jpg', '052.jpg', '053.jpg', '054.png',
  '055.jpg', '056.jpg', '057.jpg', '058.jpg', '059.jpg', '060.jpg',
  '061.png', '062.jpg', '063.jpg', '064.jpg', '065.jpg', '066.jpg',
  '067.jpg', '068.jpg', '069.jpg', '070.jpg', '071.jpg', '072.png',
  '073.png', '074.jpg', '075.png', '076.jpg', '077.jpg', '078.jpg',
  '079.jpg', '080.jpg', '081.png', '082.jpg', '083.jpg', '084.jpg',
  '085.jpg', '086.jpg', '087.jpg', '088.jpg', '089.jpg', '090.jpg',
  '091.jpg', '092.png', '093.jpg', '094.jpg', '095.jpg', '096.jpg',
  '097.jpg', '098.jpg', '099.jpg', '100.jpg', '101.jpg', '102.jpg',
  '103.jpg', '104.jpg', '105.jpg', '106.jpg', '107.jpg', '108.jpg',
  '109.jpg', '110.jpg', '111.jpg', '112.jpg', '113.jpg', '114.jpg',
  '115.jpg', '116.jpg', '117.jpg', '118.jpg', '119.jpg', '120.jpg',
  '121.jpg', '122.jpg', '123.jpg', '124.jpg', '125.jpg', '126.jpg',
  '127.jpg', '128.jpg', '129.jpg', '130.jpg', '131.jpg', '132.jpg',
  '133.jpg', '134.jpg', '135.jpg', '136.jpg', '137.png', '138.jpg',
  '139.jpg', '140.jpg', '141.jpg', '142.jpg', '143.jpg', '144.jpg',
  '145.jpg', '146.png', '147.jpg', '148.jpg', '149.jpg', '150.jpg',
  '151.jpg', '152.jpg', '153.jpg', '154.jpg', '155.jpg', '156.jpg',
  '157.jpg', '158.jpg', '159.jpg', '160.jpg', '161.jpg', '162.jpg',
  '163.jpg', '164.jpg', '165.jpg', '166.jpg', '167.jpg', '168.jpg',
  '169.jpg', '170.jpg', '171.jpg', '172.jpg', '173.jpg', '174.png',
  '175.jpg', '176.jpg', '177.jpg', '178.jpg', '179.jpg', '180.jpg',
  '181.jpg', '182.jpg', '183.jpg', '184.jpg', '185.jpg', '186.jpg',
  '187.png', '188.jpg', '189.jpg', '190.jpg', '191.jpg', '192.jpg',
  '193.png', '194.jpg', '195.jpg', '196.jpg', '197.jpg', '198.jpg',
  '199.jpg', '200.jpg', '201.jpg', '202.png', '203.jpg', '204.jpg',
  '205.jpg', '206.jpg', '207.jpg', '208.jpg', '209.jpg', '210.jpg',
  '211.jpg', '212.jpg', '213.jpg', '214.jpg', '215.jpg', '216.jpg', '217.jpg','218.png']

const MangaViewer = () => {
  const [imageUrls, setImageUrls] = useState(chapter);
  const [error, setError] = useState(null);
  const [no, setNo] = useState(1); // Initial value of no

  
  const handleNextClick = () => {
    if (no < 5) {
      setNo(no + 1); // Increment 'no' if it's less than 5
    }
  };

  const handlePrevClick = () => {
    if (no > 1) {
      setNo(no - 1); // Decrement 'no' only if it's greater than 1
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {error && <p>{error}</p>}
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <img
              key={index}
              src={`/boss/ch${no}/${url}`} // Assuming "url" is the image filename
              alt={`Page ${index + 1}/${url}`}
              style={{ width: "100%", height: "auto" }}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "80vh",
            }}
          >
            <span className="loader"></span>
          </div>
        )}
      </div>
      {/* <div>
        <button
          className="btn btn-light pagination-prev"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white" }}
          onClick={() => {
            handlePrevClick();
            scrollToTop();
          }}
        >
          Previous
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-light pagination-next"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            marginLeft: "70%",
          }}
          onClick={() => {
            handleNextClick();
            scrollToTop();
          }}
        >
          Next
        </button>
      </div> */}
    </>
  );
};

export default MangaViewer;
