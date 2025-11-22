# 🧍‍♂️ **Smart Body Measurement App (AI-Powered)**

### 🔗 **Live Demo**

👉 https://body-measure.netlify.app/

An AI-powered web application that automatically measures a person's
**height, arm length, leg length, chest width, waist width, and hip
width** from a full-body image.\
Built with **MediaPipe Tasks Vision**, **FastAPI**, **Python**,
**OpenCV**, and **pure HTML/CSS/JavaScript**.

---

## 🚀 **Features**

### 🖥️ **Frontend**

- Upload any full-body image\
- Instant AI body-landmark detection\
- Measurements shown in **millimeters (mm)**\
- Clean & responsive UI\
- Download results as CSV\
- Hosted live on Netlify

### ⚙️ **Backend**

- FastAPI endpoint: `/api/measure`\
- CSV export endpoint: `/api/measure.csv`\
- Uses MediaPipe Pose for detecting **33 body landmarks**\
- Calculates all body metrics\
- Automatically saves logs inside `uploads/`\
- Fully CORS-enabled

---

## 🛠️ **Tech Stack**

Layer Technologies

---

**Frontend** HTML, CSS, JavaScript, MediaPipe Tasks Vision
**Backend** FastAPI, Python, NumPy, OpenCV, MediaPipe Pose
**Hosting** Netlify (frontend), Local/Cloud server (backend)

---

## 📂 **Project Structure**

    📦 body-measurement-ai
    ├── app.py                 # FastAPI backend
    ├── measure.html           # Frontend webpage
    ├── uploads/               # Saved measurement logs
    └── README.md

---

## ⚙️ **Run Backend Locally**

### 1️⃣ Install dependencies

```bash
pip install fastapi uvicorn mediapipe opencv-python numpy
```

### 2️⃣ Start FastAPI server

```bash
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at:\
👉 **http://127.0.0.1:8000**

---

## 🖥️ **Run Frontend Locally**

You **must** run the frontend using a local server (MediaPipe will not
load using `file://`).

### Option A --- Python HTTP server

```bash
python3 -m http.server 5500
```

Then open:\
👉 **http://127.0.0.1:5500/measure.html**

---

## 📸 **How the AI Works**

1.  The user uploads a full-body photo\
2.  MediaPipe detects body landmarks\
3.  Pixel distances are calculated\
4.  Values are converted to millimeters (**1 px = 1 mm default**)\
5.  Measurements displayed instantly on screen\
6.  User can download results as a CSV file

---

## 📊 **Example Output (mm)**

Metric Value

---

Height 986.2
Arm Length 287.4
Leg Length 433.1
Chest Width 178.5
Waist Width 152.8
Hip Width 182.3

---

## 🚀 **Future Improvements**

- A4 paper calibration for real-world accurate scale\
- Conversion mm → cm/inches\
- 3D body mesh reconstruction\
- Automatic clothing size recommendation\
- Mobile app version

---

## 👤 **Authors**

### **Jahongir Yusupov**

Master of IT (Software Design & Development), Sydney\
Creator of the Smart Body Measurement App\
👉 https://body-measure.netlify.app/

### **Asqarova Hurshida**

Frontend Developer & IT Tutor, Uzbekistan\
UI/UX contributor and frontend enhancement specialist

---

## 📜 **License**

This project is open-source under the **MIT License**.
