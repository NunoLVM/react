//  Core dependencies
import { useState } from "react";
import "./App.css";

//  Layout components (Header, Footer)
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

//  Main sections (Homepage, Profile, Stats)
import Home from "./components/Home.jsx";
import ProfileView from "./components/ProfileView.jsx";
import StatsView from "./components/StatsView.jsx";

//  Content components (Articles, Quotes, Products, Pizza, Cart)
import Article from "./components/Article.jsx";
import Quote from "./components/Quote.jsx";
import Product from "./components/Product.jsx";
import Pizza from "./components/Pizza.jsx";
import CartSummary from "./components/CartSummary.jsx";
import ProductCard from "./components/ProductCard.jsx";

//  User-related components (Profile, Status)
import UserProfile from "./components/UserProfile.jsx";
import UserStatus from "./components/UserStatus.jsx";

//  Interactive components (Messages, Buttons, Status Boxes, Tasks)
import Message from "./components/Message.jsx";
import StatusBox from "./components/StatusBox.jsx";
import TaskItem from "./components/TaskItem.jsx";
import CustomButton from "./components/CustomButton.jsx";
import ColorButton from "./components/ColorButton.jsx";
import DiceRoll from "./components/DiceRoll.jsx";

export default function App() {
  //  Task list for display
  const tasks = [
    { id: 1, title: "Finish the report", status: "completed" },
    { id: 2, title: "Review the code", status: "in-progress" },
    { id: 3, title: "Prepare the meeting", status: "pending" }
  ];

  //  State management for dynamic updates
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const getRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };
  const [isActive, setIsActive] = useState(false);
  const [isProfile, setIsProfile] = useState(true);

  return (
    <div className="container">
      <Header />
      <WelcomeMessage />

      {/*  Toggle between Profile and Statistics */}
      <div className="app-container">
        <button onClick={() => setIsProfile(!isProfile)}>
          {isProfile ? "View Statistics" : "View Profile"}
        </button>
        {isProfile ? <ProfileView /> : <StatsView />}
      </div>

      {/*  Mode Activation */}
      <div className="mode-container">
        <h2>Mode: {isActive ? "🟢 ACTIVATED" : "🔴 DEACTIVATED"}</h2>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Deactivate" : "Activate"}
        </button>
      </div>

      {/*  Background Color Changing */}
      <div className="app-container" style={{ backgroundColor: color }}>
        <h2>Current Color: {color}</h2>
        <button onClick={getRandomColor}>🎨 Change Color</button>
      </div>

      {/*  User Status Display */}
      <UserStatus isOnline={true} />
      <UserStatus isOnline={false} />

      {/*  Message Visibility Toggle */}
      <div className="visibility-container">
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide Message" : "Show Message"}
        </button>
        {visible && <p className="message">This is a dynamic message!</p>}
      </div>

      {/*  Counter Section */}
      <div className="counter-container">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>➕ Add</button>
        <button onClick={() => setCount(count - 1)}>➖ Remove</button>
      </div>

      <div className="container">
      <DiceRoll />
      </div>

      <Home />
      <Quote />

      {/*  Articles Section */}
      <div className="article-container">
        <Article title="Understanding Hooks" author="Alice" />
        <Article title="JSX vs HTML" author="Bob" />
        <Article title="Using Props Efficiently" author="Charlie" />
      </div>

      {/*  Products Section */}
      <div className="product-row">
        <Pizza />
        <Product />
        <CartSummary />
      </div>

      {/*  Tasks List */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} status={task.status} />
        ))}
      </div>

      {/*  Product Catalog */}
      <div className="catalog">
        <ProductCard
          name="Smartphone X Pro"
          price={899.99}
          description="6.5-inch OLED display, 48MP camera, and fast charging."
        />
        <ProductCard
          name="Bluetooth Headset"
          price={149.99}
          description="Immersive sound, noise reduction, and 24-hour battery life."
        />
        <ProductCard
          name="Smartwatch"
          price={199.99}
          description="Health tracking, notifications, and elegant design."
        />
      </div>

      {/*  Custom Buttons */}
      <div className="button-container">
        <CustomButton text="Buy Now" bgColor="#007bff" />
        <CustomButton text="Cancel" bgColor="#dc3545" />
        <CustomButton text="Confirm" bgColor="#28a745" />
      </div>

      {/*  Status Boxes & Messages */}
      <ColorButton text="Place Order Now" />
      <StatusBox status="success" />
      <StatusBox status="warning" />
      <StatusBox status="error" />
      <StatusBox status="" />

      <Message text="Important information to note." type="info" />
      <Message text="Attention! An action is required." type="warning" />
      <Message text="Operation successful! Everything is fine." type="success" />

      {/*  User Profile Display */}
      <UserProfile name="Tintin Dupont" imageUrl="https://i.pravatar.cc/150?img=3" bio="Legionnaire" />

      <Footer />
    </div>
  );
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
