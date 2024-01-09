import React from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const percentage = 66;

function withdraw() {
  return (
    <>
      <div className="rounded white_background h-screen rounded-lg">
        <div className="h-48 bg_green rounded-lg px-8 pt-3">
          <div className="flex justify-end">
            <i
              class="ri-eye-off-fill h_3 cursor-pointer"
              style={{ color: "#6E6E6E" }}
            ></i>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <i class="ri-cash-line text_green h_3"></i>
              <p className="h_3 text_green font-semibold mb-0">Withdrawn</p>
              <p className="h_1 text_green font-semibold">$22,748</p>
            </div>
            <div>
              <i class="ri-line-chart-line h_6 text_green h_5"></i>
              <p className="h_5 font-light gray_6">
                <span className="text_green font-medium">
                  %10 Increase
                </span>
                <br /> from last week
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 pt-3">
          <div>
            <a className="h_4 no-underline text_black font-medium">
              Commission
            </a>
          </div>
          <div className="row">
            <div className="col-6">
            {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
            </div>
            <div className="col-6">
                <div className="flex">
                <div className="col-6 flex">
                  <div className="left_border me-2" style={{color: "#DBEDF4"}}></div>
                  <div>
                <i class="ri-bank-card-fill h_4" style={{color: "#B7CAD2"}}></i>
                <p className="gray_6 h_6 mb-0">Potential <br /> Commission</p>
                <p className="gray_6 h_5 font-semibold">$26,347</p>
                </div>
                </div>
                <div className="col-6 flex">
                  <div className="left_border me-2" style={{color: "#51BAE7"}}></div>
                  <div>
                  <i className="ri-money-dollar-circle-fill h_4" style={{color: "#51BAE7"}}></i>
                <p className="gray_6 h_6 mb-0">Earned <br /> Commission</p>
                <p className="gray_6 h_5 font-semibold" style={{color: "#51BAE7"}}>$12,443</p>
                </div>
                </div>
                </div>
                <div className="flex">
                <div className="col-6 flex">
                <div class="pie" data-pie='{ "lineargradient": ["yellow","#ff0000"], "round": true, "percent": 75, "colorCircle": "#e6e6e6" }'>
    </div>
                </div>
                <div className="col-6 flex">
                  <div className="left_border me-2" style={{color: "#FF5353"}}></div>
                  <div>
                  <i className="ri-money-dollar-circle-fill h_4" style={{color: "#FF5353"}}></i>
                <p className="gray_6 h_6 mb-0">Refund</p>
                <p className="gray_6 h_5 font-semibold" style={{color: "#FF5353"}}>$12,443</p>
                </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withdraw;
