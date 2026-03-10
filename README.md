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

