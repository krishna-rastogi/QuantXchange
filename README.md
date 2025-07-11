# QuantXchange 🚀

QuantXchange is a **full-stack virtual stock trading platform** that provides an immersive experience of live market orders, holdings, 
positions, and fund management – designed for learning, testing, and simulating trading strategies with real-world interfaces.

---

## ✨ **Features**

✅ User authentication and session management  
✅ Live watchlist with dynamic prices  
✅ Buy and sell stocks with margin checks  
✅ Real-time holdings, orders, and positions updates  
✅ Funds management (add/withdraw) with equity updates  
✅ Context API and React Hooks for global state management  
✅ Modular component structure for scalability

---

## 🛠️ **Tech Stack**

- **Frontend:** React.js, React Router, Context API, Axios  
- **Backend:** Node.js, Express.js (private or upcoming backend repository)  
- **Database:** MongoDB (assumed for storing orders, holdings, users)  
- **Authentication:** JWT tokens  
- **Styling:** Custom CSS modules

---

## 🔧 **Setup Instructions**

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishna-rastogi/QuantXchange.git
   cd QuantXchange
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Backend**

- Ensure the backend server is running on localhost:8080 as per current Axios requests.

- Adjust the API base URLs if deploying on cloud.

📁 **Project Structure**
```kotlin
QuantXchange/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.js
│   ├── Dashboard.jsx
│   ├── FundsContext.jsx
│   └── HoldingsContext.jsx
├── public/
├── package.json
└── README.md
```
