import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([
    {
      id: 0,
      name: "Meryl Lounge Chair",
      price: 148,
      title:
        "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs",

      pictures: [
        {
          id: 0,
          rasm: "https://atlas-content-cdn.pixelsquid.com/stock-images/contemporary-chair-z0AGK2F-600.jpg",
        },
        {
          id: 1,
          rasm: "https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png",
        },
        {
          id: 2,
          rasm: "https://atlas-content-cdn.pixelsquid.com/stock-images/contemporary-chair-z0AGK2F-600.jpg",
        },
        {
          id: 3,
          rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHlLD77nK9_tAcmct0QGHuIj1gRfsoPvffQQsSnGcGqu-T0_FKks_hozLG35kM8bhytg&usqp=CAU",
        },
        {
          id: 4,
          rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2tW7v3z6gnA_MRY_IQlHnl95w4AoTs1ORpfDxI2rWjTW9F1GTQni1OIwU7uaQO2LH0E&usqp=CAU",
        },
      ],
    },
    {
      id: 1,
      name: "MODERN WAVE",
      price: 178,
      title:
        "Solimo offers a range of kitchenware, home furnishing, mobile accessories, appliances, home decor, backpacks, mattresses and much more",

      pictures: [
        {
          id: 0,
          rasm: "https://www.shutterstock.com/image-vector/vector-realistic-yellow-armchair-3d-600nw-2239751635.jpg",
        },
        {
          id: 1,
          rasm: "https://www.shutterstock.com/image-vector/vector-realistic-yellow-armchair-3d-600w-2239751635.jpg",
        },
        {
          id: 2,
          rasm: "https://www.shutterstock.com/image-photo/yellow-armchair-isolated-on-white-260nw-2422176163.jpg",
        },
        {
          id: 3,
          rasm: "https://m.media-amazon.com/images/I/51H2cfmZITL._AC_UF894,1000_QL80_.jpg",
        },
        {
          id: 4,
          rasm: "https://m.media-amazon.com/images/I/71JGvmUHg4L._AC_UF894,1000_QL80_.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "URBAN SIGNATURE Toddman High",
      price: 458,
      title:
        "TASTEFUL TUFTED DESIGN This is a modern wingback chair that effortlessly fuses elements of traditional and on trend design. It will put your plain armchair to shame with its gloriously graceful form, plush tufted seat and backrest, and contemporary mismatched legs. With ample room to wriggle into, our tufted wingback chair will become your new favorite chill out zone",

      pictures: [
        {
          id: 0,
          rasm: "https://m.media-amazon.com/images/I/61Han3GBqjL._SL1500_.jpg",
        },
        {
          id: 1,
          rasm: "https://m.media-amazon.com/images/I/61BELYetSPL._SL1500_.jpg",
        },
        {
          id: 2,
          rasm: "https://m.media-amazon.com/images/I/61Han3GBqjL._SL1500_.jpg",
        },
        {
          id: 3,
          rasm: "https://m.media-amazon.com/images/I/61u6K9Ed2mL._SL1500_.jpg",
        },
        {
          id: 4,
          rasm: "https://m.media-amazon.com/images/I/61u6K9Ed2mL._SL1500_.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "MODERN WAVE Pamona Velvet Solid Wood",
      price: 348,
      title:
        "MODERN WAVE Pamona Velvet Solid Wood Upholstered Arm Chair Wingback Chair Sofa Bench Sofa Couch High Back Wing Chair Single Seater Chair for Living Room Office Bedroom (Burgundy)",

      pictures: [
        {
          id: 0,
          rasm: "https://m.media-amazon.com/images/I/51+cEiMHM0L.jpg",
        },
        {
          id: 1,
          rasm: "https://m.media-amazon.com/images/I/51abkSO7HIL._SL1016_.jpg",
        },
        {
          id: 2,
          rasm: "https://m.media-amazon.com/images/I/41+SdPdKhDL.jpg",
        },
        {
          id: 3,
          rasm: "https://m.media-amazon.com/images/I/51abkSO7HIL._SL1016_.jpg",
        },
        {
          id: 4,
          rasm: "https://m.media-amazon.com/images/I/41AGm-geXLL.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Modern Chasterfield Velvet Chair",
      price: 248,
      title:
        "The Sofa Studio - Modern Chasterfield Velvet Chair Button Tufted High Back Wing Chair with Round Arm for Living Room, Bedroom, Hallway (Yellow)",

      pictures: [
        {
          id: 0,
          rasm: "https://m.media-amazon.com/images/I/51m8pa3yBML.jpg",
        },
        {
          id: 1,
          rasm: "https://m.media-amazon.com/images/I/51m8pa3yBML.jpg",
        },
        {
          id: 2,
          rasm: "https://m.media-amazon.com/images/I/31CEl2YbOZL.jpg",
        },
        {
          id: 3,
          rasm: "https://m.media-amazon.com/images/I/41aeUvFZA0L.jpg",
        },
        {
          id: 4,
          rasm: "https://m.media-amazon.com/images/I/31FdbK5IlOL.jpg",
        },
      ],
    },
  ]);

  const [index, setIndex] = useState(0);

  const [typeImg, setTypeImg] = useState(0);
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="./imgs/logo.png" alt="" />
            </div>
            <ul className="links">
              <li>SHOP</li>
              <li>COLLECTIVE</li>
              <li>DESIGNERS</li>
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </ul>
            <div className="icons">
              <div className="bars">
                <p>
                  <i className="fa-solid fa-bars-staggered"></i>
                </p>
                <p>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </p>
              </div>
              <div className="solid">
                <p>
                  <i className="fa-solid fa-cart-shopping"></i>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero_top">
              <div className="chair">
                <h1>
                  <i className="fa-solid fa-arrow-left"></i>
                </h1>
                <p>
                  <span>Chair</span>/ Meryl Lounge Chair
                </p>
              </div>
              <div className="slids">
                <h1>
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                  <span>
                    / {data.length < 10 ? "0" + data.length : data.length}
                  </span>
                </h1>
                <div className="chevron">
                  <p
                    onClick={() => {
                      if (index > 0) {
                        setIndex(index - 1);
                      } else {
                        setIndex(data.length - 1);
                      }
                    }}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </p>
                  <p
                    onClick={() => {
                      if (index < data.length - 1) {
                        setIndex(index + 1);
                      } else {
                        setIndex(0);
                      }
                    }}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="hero_bottom">
              <div className="hero_left">
                <h1>{data[index].name}</h1>
                <div className="ball">
                  <h2>{data[index].price}$</h2>
                  <div className="stars">
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <p>
                      4.6 / 5.0 <span>(556)</span>
                    </p>
                  </div>
                </div>

                <p className="gently">{data[index].title}</p>

                <div className="dotts">
                  <div className="dot dot1"></div>
                  <div className="dot dot2"></div>
                  <div className="dot dot3"></div>
                  <div className="dot dot4"></div>
                </div>
                <div className="buys">
                  <div className="buy">
                    {isModalOpen && (
                      <div className="check">Maxsulot tugadi</div>
                    )}
                    <button
                      onClick={() => {
                        if (count > 0) {
                          setCount(count - 1);
                        } else {
                          setTimeout(() => {
                            setIsModalOpen(true);
                            setTimeout(() => {
                              setIsModalOpen(false);
                            }, 1000);
                          });
                        }
                      }}
                      className="minus"
                    >
                      -
                    </button>
                    <h3 className="contents">{count}</h3>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                        setIsModalOpen(false);
                      }}
                      className="plus"
                    >
                      +
                    </button>
                  </div>
                  <button className="cart">Add to Cart</button>
                </div>
                <p className="free">
                  Free 3-5 day shipping • Tool-free assembly • 30-day trial
                </p>
                <div className="wishlist">
                  <div className="regular">
                    <h4>
                      <i className="fa-regular fa-heart"></i>
                    </h4>
                    <p>Add to Wishlist</p>
                  </div>
                  <div className="network">
                    <p>
                      <i className="fa-brands fa-facebook"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-twitter"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-pinterest"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero_right">
                <div className="rasm">
                  <img
                    className="surat"
                    src={data[index].pictures[typeImg].rasm}
                    alt=""
                  />
                </div>
                <div className="bosh"></div>
                <div className="boxs">
                  {data[index].pictures.map((picture, idx) => (
                    <div
                      key={picture.id}
                      onClick={() => setTypeImg(idx)}
                      className={`box box${idx + 1}`}
                    >
                      <img src={picture.rasm} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
