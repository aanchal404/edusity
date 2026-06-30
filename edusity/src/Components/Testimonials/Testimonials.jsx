import React, { useRef } from "react";
import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />

      <img
        src={back_icon}
        alt="Previous"
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="William Jackson" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Sophia Johnson" />
                <div>
                  <h3>Sophia Johnson</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>

              <p>
                The faculty members are incredibly supportive and always willing
                to help. I gained practical experience and valuable skills that
                prepared me for my professional career.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="James Anderson" />
                <div>
                  <h3>James Anderson</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>

              <p>
                Edusity provides an excellent learning environment with modern
                infrastructure and engaging activities. It has been an amazing
                journey filled with opportunities.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Emma Wilson" />
                <div>
                  <h3>Emma Wilson</h3>
                  <span>Edusity, United Kingdom</span>
                </div>
              </div>

              <p>
                I highly recommend Edusity to anyone looking for quality
                education. The campus, faculty, and student community create a
                wonderful atmosphere for learning and personal growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;