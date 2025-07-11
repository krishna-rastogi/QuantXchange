import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css"; 

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8080/orders"); 
        console.log("Fetched orders:", res.data); 
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <span className="order-name">{order.name}</span>
              <span className="order-qty">Qty: {order.qty}</span>
              <span className="order-price">Price: {order.price}</span>
              <span className={`order-mode ${order.mode.toLowerCase()}`}>
                {order.mode}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
