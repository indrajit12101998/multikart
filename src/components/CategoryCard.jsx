import { useSelector } from "react-redux";

export default function CategoryCard(props) {
  // const cardData = props.data;
  const baseUrl = useSelector((state) => state.BaseSlice.baseUrl);
  return (
    <a href="category-page(vegetables).html">
      <div className="category-boxes">
        <div className="img-sec">
          <img
            src="../assets/images/icon/vegetables/veg.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <h4>Vegetables</h4>
      </div>
    </a>
  );
}
