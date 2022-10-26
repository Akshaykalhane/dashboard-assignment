import React from 'react';
import './App.css';


const App=()=>{



  return(
    <>
      
    <div class="side-bar">
        <p>Menu</p>
        <div class="dashboard">
            <p>Dashboard</p>
            <ul>
                <li>Ecommerce</li>
                <li>Saas</li>
                <li>Crypto</li>
            </ul>
        </div>
        <div class="dashboard">
            <p> Applications</p>
            <ul>
                <li>Calender</li>
                <li>Chat</li>
            </ul>
        </div>
    </div>

    <div class="dash-header">
        <div class="headerin">
            <h2>DashBoard</h2>
            <div class="account-info">
                <div class="account-info-in">
                    <img src="./image/SEARCH.svg" alt="" />
                </div>
                <div class="account-info-in"></div>
                <div class="account-info-in">
                    <img src="./image/Vector (9).png" alt="" />
                </div>
                <div class="account-info-in">
                    <img src="./image/Notification Bell.svg" alt="" />
                </div>
                <div class="account-info-in"><img src="./image/seettings.svg" alt="" /></div>
                <div class="account-info-in">
                    <img src="./image/Ellipse 1.png" alt="" />
                </div>
            </div>
        </div>
    </div>

    <div class="dash-container">
        <div class="left">
            <div class="analysis">
                <div class="items">
                    <div class="initem1">
                        <span class="icon"></span>
                        <div class="content-text">
                            <p>Revenue</p>
                            <h2>$21,000</h2>
                        </div>
                    </div>
                    <div class="intem2 prof">+2.65%</div>
                </div>
                <div class="items">
                    <div class="initem1">
                        <span class="icon"></span>
                        <div class="content-text">
                            <p>Order</p>
                            <h2>6,000</h2>
                        </div>
                    </div>
                    <div class="intem2 loss">-2.65%</div>
                </div>
                <div class="items">
                    <div class="initem1">
                        <span class="icon"></span>
                        <div class="content-text">
                            <p>Customers</p>
                            <h2>61,000</h2>
                        </div>
                    </div>
                    <div class="intem2 loss">-2.65%</div>
                </div>
            </div>
            <div class="overview-container">
                <div class="over-header">
                    <h2>Overview</h2>
                    <div class="select-box">
                        Sort By :
                        <select name="view" id="">
                            <option value="">Yearly</option>
                            <option value="">Monthly</option>
                        </select>
                    </div>
                </div>
                <div class="overview-stat">
                    <p>This Month</p>
                    <h3>$24,000 <span class="prof">+2.65%</span></h3>
                    <div class="more-stat">
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                        <div class="stat-item">
                            <p>Orders</p>
                            <h4>5,546</h4>
                        </div>
                    </div>
                </div>
                <div class="overview-graph"></div>
            </div>
            <div class="activities">
                <div class="user-activity"></div>
                <div class="other-stat"></div>
                <div class="top-product"></div>
            </div>
        </div>
        <div class="right">
            <div class="account-header">
                <div class="user-icon"><img src="./image/Ellipse 1.png" alt="" />
                </div>
            </div>
            <div class="account-more">
                <h3>Jennifer Bennette</h3>
                <p>Product Manager</p>
            </div>
            <div class="account-stat">
                <div class="follow">
                    <h2>129</h2>
                    <p>Products</p>
                </div>
                <div class="follow">
                    <h2>5.4k</h2>
                    <p>Followers</p>
                </div>
            </div>
            <div class="row"></div>
        </div>
    </div>
    </>
  )
}


export default App;