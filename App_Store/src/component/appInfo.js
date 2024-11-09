import React from "react";
import appLogo from "../images/logo.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import ApplicationsList from "./appsList";

function AppInfo() {
    return (
        <div className="mainCat">
            <div className="topAppsGames_child full_W">
                <div className="flex_Dis">
                    <div className="topAppsGames_child_logo">
                        <img src={appLogo} alt="Yassin Tv logo" />
                    </div>
                    <div className="topAppsGames_child_info marg_L">
                        <p>app name</p>
                        <p>rate 5 start</p>
                        <p>cat and devlopper name</p>
                    </div>
                </div>
                <div className="topAppsGames_child_btnDownload">
                    <button>install</button>
                </div>
            </div>
            <div className="imgCatalog">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
            </div>
            <div className="descriptionSection">
                <h5>description</h5>
                <p>
                    text ................
                </p>
            </div>
            <div className="aboutSection">
                <h5>About</h5>
                <div className="flex_Dis">
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                    <div className="abouteDetails">
                        <div>Price</div>
                        <div>Free</div>
                    </div>
                </div>
            </div>
            <ApplicationsList/>
        </div>
    );
}

export default AppInfo;
