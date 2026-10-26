// =====================================
// ACTIVITY CONTROLLER
// =====================================
// This file handles CRUD operations
// for MindQuest activities.


// CREATE
// Add a new activity.
exports.createActivity = (req, res) => {

  // TODO:
  // 1. Get activity information from req.body
  // 2. Validate the information
  // 3. Save the activity to the database

  res.status(501).send("Create activity - Coming soon");
};


// READ
// Retrieve all activities.
exports.getActivities = (req, res) => {

  // TODO:
  // 1. Retrieve activities from the database
  // 2. Send activities to an EJS view

  res.status(501).send("Read activities - Coming soon");
};


// UPDATE
// Edit an existing activity.
exports.updateActivity = (req, res) => {

  // TODO:
  // 1. Find the activity using req.params.id
  // 2. Get updated information from req.body
  // 3. Update the activity in the database

  res.status(501).send("Update activity - Coming soon");
};


// DELETE
// Remove an activity.
exports.deleteActivity = (req, res) => {

  // TODO:
  // 1. Find the activity using req.params.id
  // 2. Delete it from the database

  res.status(501).send("Delete activity - Coming soon");
};