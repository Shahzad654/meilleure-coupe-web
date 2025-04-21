import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

export default function MyOrders() {
    const orders = useSelector((state) => state.user.orders);

    return (
        <>
            <Navbar />
            <StyledOrders>
                <div className="main">
                    <h3>My Orders</h3>

                    {orders && orders.length > 0 ? (
                        <div className="orders_list">
                            {orders.map((order) => (
                                <div key={order.id} className="order_card">
                                    <div className="order_top">
                                        <div className="order_id">Order Id: {order.id.slice(0, 6)}</div>
                                        <div className="order_date">{new Date(order.createdAt).toLocaleDateString()}</div>
                                    </div>

                                    <div className="order_items">
                                        {order.items?.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="item_name">{item.name}</div>
                                                <div className="item_qtyprice">{item.quantity} × €{item.price}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="order_bottom">
                                        <div className="order_total">Total: €{parseFloat(order.total).toFixed(2)}</div>
                                        <div className="order_delivery">Delivery: €{order.deliveryFee}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty_state">
                            <p>No orders yet.</p>
                        </div>
                    )}
                </div>
            </StyledOrders>
            <Footer />
        </>
    )
}

const StyledOrders = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;
 

  .main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .orders_list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .order_card {
    background: #f9f9f9;
    border: 1px solid #e5e7eb;
    border-radius: var(--m-radius);
    padding: 24px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:hover {
      border-color: var(--primary-color-light);
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
    }
  }

  .order_top {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    color: var(--text-light-color);
  }

  .order_items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .item {
    display: flex;
    justify-content: space-between;
    color: var(--text-light-color);
  }

  .order_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-weight: 500;
  }

  .empty_state {
    text-align: center;
    color: var(--text-gray-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
