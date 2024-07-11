// import { useNavigate } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
function RouteLink() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a different route
    navigate("/user-list");
  };
  return (
    <div>
      <Routes>
        <Route path="/misal-pav" element={<div>This is misal pav</div>}></Route>
      </Routes>
      
      <button onClick={handleClick}>Go to Another Route</button>
    </div>
  );
}
export default RouteLink;
