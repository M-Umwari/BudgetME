**BudgetME:**  Personal Budget Manager

A simple and intuitive web application for tracking expenses, managing budgets, and visualizing spending across various categories.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Overview

The **Personal Budget Manager** is a tool designed to help users manage their personal finances by tracking expenses, setting budget limits for various categories, and receiving real-time alerts when spending approaches predefined limits.

This project was created as part of a larger effort to improve personal financial literacy and budgeting skills. Users can easily add expenses, filter expenses by category and date, and get visual insights into their spending patterns.

## Features

- **Expense Tracking**: Add, edit, and delete expenses.
- **Budget Limits**: Set limits for different categories and receive alerts when approaching or exceeding limits.
- **Date and Category Filtering**: Filter expenses by date range and category for a clearer view of spending.
- **Visual Summaries**: Visualize expenses using charts and graphs (e.g., pie charts or bar graphs).
- **Mobile Responsive**: Fully responsive design, optimized for both desktop and mobile devices.

## Technologies

- **React**: Front-end framework for building the UI.
- **JavaScript (ES6+)**: Main programming language for logic.
- **CSS/Plain HTML**: Custom styling and layout.
- **Chart.js**: Used for rendering visual summaries of expenses.
- **LocalStorage**: For persisting user data (expenses, budgets) between sessions.

## Installation

1. **Clone the repository:**

   ```

   git clone https://github.com/your-username/personal-budget-manager.git
   cd BudgetME
   ```

2. **Install dependencies:**

   ```
   yarn
   
   ```

3. **Run the app:**
   ```
   yarn dev
   ```
look for the url where the application is running from the terminal
ex: The application will be running at http://localhost:3000/.

## Usage
- Setting Initial Balance: On the main page, input your starting balance. This will serve as the total budget.
- Adding Expenses: You can add expenses by category, amount, and date. Use the input fields to track your spending.
- Viewing Expenses: Use the filter fields to view expenses by date range or category.
- Budget Alerts: When your expenses in a particular category exceed the predefined budget, the category will be highlighted in red, and a warning will be displayed.
- Expense Visualization: View pie charts or bar graphs of your spending to better understand your financial habits.
  
