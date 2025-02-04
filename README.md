# Number Classification API

## 🚀 Overview
This API classifies a given number by checking its mathematical properties and fetching a fun fact using the Numbers API.

## 📌 Features
- Determines whether a number is **prime** or **perfect**.
- Identifies if a number is an **Armstrong number**.
- Classifies the number as **odd** or **even**.
- Computes the **sum of its digits**.
- Fetches a **fun fact** from the Numbers API.

## 🛠️ Technology Stack
- **Backend**: Node.js, Express.js
- **External API**: [Numbers API](http://numbersapi.com/)
- **Deployment**: Render
- **Version Control**: GitHub

## 📡 API Endpoint
### **GET /api/classify-number?number={num}**
#### ✅ **Success Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### ❌ **Error Response (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

## 🏗️ Project Structure
```
Backend/
│── server.js
│── package.json
│── routes/
│   ├── classify.js
│── controllers/
│   ├── classifyController.js
│── utils/
│   ├── mathUtils.js
```

## ⚙️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/DevGracies/Classification-API.git
   cd Backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the server:**
   ```sh
   node server.js

## 🚀 Deployment
1. **Choose a hosting platform**  Render
2. **Push to GitHub and link to the hosting service.**
3. **Ensure the API is publicly accessible.**

## ✅ Testing
- Use a browser to test:
  ```sh
  http://localhost:3000/api/classify-number?number=371

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch 
3. Commit changes and push.
4. Open a Pull Request.

---
🎯 **Developed for HNG Backend Task.** 🚀

