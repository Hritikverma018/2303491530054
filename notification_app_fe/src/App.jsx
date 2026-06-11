import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    const response = await fetch("http://localhost:3000/notifications");
    const data = await response.json();
    setNotifications(data);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const sendNotification = async () => {
    await fetch("http://localhost:3000/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: "123",
        title,
        message
      })
    });

    setTitle("");
    setMessage("");

    loadNotifications();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification System</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={sendNotification}>
        Send Notification
      </button>

      <hr />

      <h2>Notifications</h2>

      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
