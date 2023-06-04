const express = require('express');
const router = express.Router();
const pesan  = require('../controllers/controller-pesan')

// Ambil data semua pesan 
router.get('/', pesan.AllPesan);

// Menambah data pesan

// router.post('/pesan/add', pesan.addPesan);

module.exports = router ;

