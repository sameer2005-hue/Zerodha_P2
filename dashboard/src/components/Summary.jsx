import React, {useState, useEffect} from 'react'

function Summary() {
  const [user, setUser] = useState(null);
  useEffect(() => {
      fetch("http://localhost:3000/api/userinfo", {
        method: "GET",
        credentials: "include", // send cookies
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setUser(data.user);
          } else {
            console.log("User not logged in");
          }
        })
        .catch((err) => console.error("Error fetching user info:", err));
    }, []);
  return (
    <>
      <div className="username">
        <h6>Hi, {user ? user.username : "USER"}</h6>
        <div className="divider"></div>
      </div>
      <div className="section">
        <span><p>Equity</p></span>

        <div className="data">
          <div className="first">
            <h3>3.74K</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margin used <span>0</span></p>
            <p>Opening balance <span>3.74K</span></p>
          </div>
        </div>
        <hr className='divider'/>
      </div>

      <div className="section">
        <span><p>Holdings (13)</p></span>
      </div>

      <div className="data">
        <div className="first">
          <h3 className="profit">1.55K <small>+5.20%</small></h3>
          <p>P&L</p>
        </div>
        <hr />
        <div className="second">
          <p>Current Value <span>31.43K</span></p>
          <p>Investment <span>29.88K</span></p>
        </div>
      </div>
    </>
  )
}

export default Summary