require("dotenv").config();
const FastSpeedtest = require("fast-speedtest-api")
const tokeni=process.env.TOKEN;
exports.getInternetSpeed=async(req,res)=>{
  try{
    let speedtest = new FastSpeedtest({
      token: tokeni,
      verbose: false,
      timeout: 10000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: FastSpeedtest.UNITS.Mbps 
  });
   
  speedtest.getSpeed().then(s => {
      res.status(200).send({
        speed: Math.round(s)
      })
  }).catch(ex => {
    res.status(400).send(ex.message);
  });
    
  }catch(ex){
    res.status(400).send(ex.message);
  }
};
