# 💱 Real-Time Currency Converter

A sleek and reliable web application designed to provide instant currency conversion using live market exchange rates. This tool is built to help travelers, freelancers, and global shoppers calculate precise conversion values across a wide range of international currencies.

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Installation & Setup](#-installation--setup)
- [API Integration](#-api-integration)
- [License](#-license)

---

## 🌟 Project Overview
In a globalized economy, knowing the exact value of your money in different currencies is essential. This project fetches up-to-the-minute data from a reliable exchange rate provider, ensuring that users always get the most current conversion figures rather than outdated, static data.

## ✨ Key Features
- **Live Exchange Rates:** Integrates with a third-party API to fetch real-time financial data.
- **Wide Currency Support:** Supports dozens of global currencies, including USD, EUR, INR, GBP, and more.
- **Interactive UI:** Features a dynamic "Swap" button to quickly switch between 'From' and 'To' currencies.
- **Instant Calculation:** No page reloads required; calculations happen instantly upon user input.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop browsers.

## 🛠 Tech Stack
- **Logic:** Vanilla JavaScript / typescript (ES6+ Features)
- **Data Source:** Exchange Rate API (Fetch API / Promises)
- **Icons:** FontAwesome / Custom SVG Flags

---

## 🔄 How It Works
1. **Selection:** Choose the base currency and the target currency from the dropdown menus.
2. **Input:** Enter the amount you wish to convert.
3. **Fetch:** The application sends a GET request to the Exchange Rate API.
4. **Display:** The logic calculates the final amount based on the retrieved rate and updates the DOM immediately.

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/Anandhu9255/Currency-Converter.git](https://github.com/Anandhu9255/Currency-Converter.git)
cd Currency-Converter

### Postman testing guide

1. Get Exchange Rates
GET /api/v1/currency/rates

Get rates with default base (EUR)
GET http://localhost:3000/api/v1/currency/rates

Expected Response:

{
  "success": true,
  "data": {
    "base": "EUR",
    "rates": {
      "USD": 1.0845,
      "GBP": 0.8573,
      "INR": 89.12,
      ...
    },
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
Get rates with USD as base
GET http://localhost:3000/api/v1/currency/rates?base=USD

2. Convert Currency
GET http://localhost:3000/api/v1/currency/convert?from=USD&to=INR&amount=100

Expected Response:

{
  "success": true,
  "data": {
    "from": "USD",
    "to": "INR",
    "amount": 100,
    "result": 8325.50,
    "rate": 83.255,
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}

### 3. Get Supported Currencies

GET http://localhost:3000/api/v1/currency/supported
Expected Response:

{
  "success": true,
  "data": {
    "EUR": "Euro",
    "USD": "US Dollar",
    "GBP": "British Pound",
    "INR": "Indian Rupee",
    ...
  }
}
4. Get Conversion History
GET http://localhost:3000/api/v1/currency/history?limit=5

Expected Response:

{
  "success": true,
  "data": [
    {
      "id": "1705312200000",
      "from": "USD",
      "to": "EUR",
      "amount": 100,
      "result": 92.15,
      "rate": 0.9215,
      "timestamp": "2024-01-15T10:30:00.000Z"
    },
    ...
  ]
}
