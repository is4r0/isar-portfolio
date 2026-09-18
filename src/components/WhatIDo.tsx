import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(true);
  const [isBackendOpen, setIsBackendOpen] = useState(false);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className={`what-content ${isFrontendOpen ? "what-content-active" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Interactive UIs</h4>
              <p>
                Crafting performant, responsive interfaces with modern frameworks.
                From details small to big, I deliver pixel-perfect experiences.
              </p>
              {isFrontendOpen && (
                <>
                  <h5>Skillset & tools</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">React.js</div>
                    <div className="what-tags">Tailwind CSS</div>
                    <div className="what-tags">Next.js</div>
                    <div className="what-tags">TypeScript</div>
                    <div className="what-tags">JavaScript</div>
                    <div className="what-tags">Vue.js</div>
                    <div className="what-tags">HTML5</div>
                    <div className="what-tags">CSS3</div>
                  </div>
                </>
              )}
              <div
                className="what-arrow"
                onClick={() => setIsFrontendOpen(!isFrontendOpen)}
              ></div>
            </div>
          </div>
          <div
            className={`what-content ${isBackendOpen ? "what-content-active" : ""}`}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Scalable Server Architecture</h4>
              <p>
                Designing robust APIs and microservices. From managing databases to
                handling servers, I build backends that scale.
              </p>
              {isBackendOpen && (
                <>
                  <h5>Skillset & tools</h5>
                  <div className="what-content-flex">
                    <div className="what-tags">Node.js</div>
                    <div className="what-tags">Terminal</div>
                    <div className="what-tags">AWS</div>
                    <div className="what-tags">MongoDB</div>
                    <div className="what-tags">Apache</div>
                    <div className="what-tags">APIs</div>
                    <div className="what-tags">Microservices</div>
                    <div className="what-tags">Python</div>
                  </div>
                </>
              )}
              <div
                className="what-arrow"
                onClick={() => setIsBackendOpen(!isBackendOpen)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
