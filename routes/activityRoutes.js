const express = require("express");
const router = express.Router();

// Import the controller.
const activityController = require("../controllers/activityController");


// CREATE
// POST /api/activities
router.post("/activities", activityController.createActivity);


// READ
// GET /api/activities
router.get("/activities", activityController.getActivities);


// UPDATE
// PUT /api/activities/:id
router.put("/activities/:id", activityController.updateActivity);


// DELETE
// DELETE /api/activities/:id
router.delete("/activities/:id", activityController.deleteActivity);


// Export routes so app.js can use them.
module.exports = router;