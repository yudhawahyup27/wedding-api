const config = require('../configs/database')

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
          id_pesan: results.id_pesan,
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

  //  Menambah data pesan
   exports.AddPesan = (req, res) =>{
    const {nama_pesan, ucapan_pesan} = req.body;
    const item = {
      nama_pesan,
      ucapan_pesan
    }
    
    config.query('INSERT INTO pesan SET ?', item , (err, results) =>{
      if(err){
        res.status(500).json({
          status: 'Error',
          message: 'Gagal Buat Pesan',
          error: err.message
        })
      }else {
        res.status(201).json({
          status: 'Success',
          message: 'Pesan Berhasil Dibuat',
          data: {
            id_pesan: results.insertId,
            nama_pesan: item.nama_pesan,
            ucapan_pesan: item.ucapan_pesan
          },
        })
      }
    })    
   }