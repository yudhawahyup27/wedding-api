const config = require('../configs/database')
// const mysql = require('mysql')
    // Ambil data semua pesan
    
   exports.AllPesan = (req,res) => {
     config.query('SELECT * FROM pesan', (err, results) =>{
       if (err) {
      res.status(500).json({
        status: 'Error',
        message: 'Failed to retrieve data',
        error: err.message,
      });
    } else {
      const data = results.map((item) => {
        return {
          id_pesan: item.id_pesan,
          nama_pesan: item.nama_pesan,
          ucapan_pesan: item.ucapan_pesan,
        };
      });
      res.status(200).json({
        status: 'Success',
        data: data,
      });
    }
    res.json(results);
     })
   }

   exports.PostPesan = (req, res) =>
