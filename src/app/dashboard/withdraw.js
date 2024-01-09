import React from "react";

function withdraw() {
  return (
    <>
      <div className="rounded white_background h-50 rounded-lg">
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
                {" "}
                <span className="text_green font-medium">
                  %10 Increase{" "}
                </span>{" "}
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
                
            </div>
            <div className="col-6">
                <div className="flex">
                <div className="col-3">
                <i class="ri-bank-card-fill h_4" style={{color: "#B7CAD2"}}></i>
                <p>Potential <br /> Commission</p>
                </div>
                <div className="col-3">ssss</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withdraw;
