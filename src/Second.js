import React, { useState, useEffect } from "react";
import "./styles.css";
export default function Second() {
  const images = [
    {
      url:
        "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
      title: "Increase your productivity",
      desc: "Paraphrase more text at once to finish writing faster."
    },
    {
      url:
        "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
      title: "Access all modes",
      desc: "Get maximum control over how you paraphrase."
    },
    {
      url:
        "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
      title: "Scan for plagiarism",
      desc: "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized."
    },
    {
      url:
        "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
      title: "Compare all mode outputs at once",
      desc: "Paraphrase in and compare outputs from all seven modes."
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div class="css-1amb98o">
      <div class="MuiGrid-root MuiGrid-container css-1d3bbye">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
          <div class="css-xyzwz4">
            <div
              class="MuiGrid-root MuiGrid-container css-1d3bbye"
              style={{ marginBottom: "15px", display: "flex" }}
            >
              <div
                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r"
                style={{ textAlign: "center" }}
              >
                <img
                  src={images[currentIndex]?.url}
                  alt="available Words"
                  class="lazyload css-ehyvoz"
                />
              </div>
              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-fitw57">
                {images?.map((item) => (
                  <div class="MuiBox-root css-11peev0">
                    <h3
                      style={{
                        color:
                          images[currentIndex]?.title === item.title
                            ? "#252525"
                            : "#499557"
                      }}
                    >
                      {item.title}
                    </h3>
                    <p class="MuiTypography-root MuiTypography-body1 css-w25sud">
                      {item.desc}
                    </p>
                    <div
                      style={{
                        width: "100%",
                        position: "relative",
                        height: "3px",
                        backgroundColor: "#DEE1E3"
                      }}
                    >
                      <div
                        duration="4.95s"
                        style={{
                          display: "block",
                          height: "3px",
                          position: "absolute",
                          top: "0"
                        }}
                        className={
                          images[currentIndex]?.title === item.title
                            ? "progress"
                            : ""
                        }
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
