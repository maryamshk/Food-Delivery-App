const express = require('express');
const { createCategory, getCategory } = require('../Controllers/CategoryController');
const router = express.Router();

router.post('createCategort', createCategory);
router.get('category', getCategory)


module.exports = router;