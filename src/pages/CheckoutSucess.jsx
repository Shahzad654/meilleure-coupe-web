import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


export default function CheckoutSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);
  const { selectedItems, total } = location.state || {};

  useEffect(() => {
    if (userInfo?.uid && selectedItems) {
      const orderData = {
        uid: userInfo.uid,
        items: selectedItems,
        totalAmount: total,
        paymentStatus: "Completed",
        timestamp: new Date(),
      };

      setDoc(doc(db, "orders", new Date().toISOString()), orderData).then(() => {
        navigate("/orders"); 
      });
    }
  }, [userInfo, selectedItems, total, navigate]);

  return <h2>Payment Successful! Redirecting...</h2>;
}
