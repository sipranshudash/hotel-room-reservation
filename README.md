# Hotel Room Reservation System

A full-stack hotel room reservation system built for the Unstop SDE assessment.  
The system allocates rooms optimally based on minimum travel time while following all given booking constraints.

---

## Tech Stack

**Frontend**
- React.js
- Redux Toolkit
- Axios

**Backend**
- Node.js
- Express.js (ES Modules)
- MongoDB
- Mongoose

**Deployment**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Problem Summary

- Total rooms: **97**
- Floors 1–9: 10 rooms each  
- Floor 10: 7 rooms  

### Booking Rules Implemented
- User can book **1–5 rooms**
- Same-floor rooms are prioritized
- If not possible, rooms are selected to **minimize travel time**
- Travel time:
  - Horizontal: 1 minute per room
  - Vertical: 2 minutes per floor

---

## Architecture Overview

- Backend handles **all booking logic**
- Frontend only displays state
- Redux manages global room state
- MongoDB stores persistent room data

Design follows the **Single Responsibility Principle**.

---

## Booking Logic (Backend)

1. Fetch all available rooms
2. Attempt allocation on the same floor
3. If insufficient:
   - Calculate travel distance  
     ```
     distance = (floorDiff × 2) + positionDiff
     ```
4. Select room set with minimum distance
5. Update booking state in database

---

## Key Features

- Optimal room allocation
- Visual room layout by floor
- Reset all bookings
- Random room occupancy
- Persistent storage using MongoDB

---

## Run Locally

### Backend
```bash
cd server
npm install
npm run dev
