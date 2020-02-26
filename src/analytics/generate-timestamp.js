function GenerateTimestamp() {
  // desired format yyyy-mm-ddThh:mm:ss-timezone 
  // i.e. 2018-03-12T12:49:31-0700
  let today = new Date();
  let offset = today.toString().match(/([-\+][0-9]+)\s/)[1];
  let date = `${today.getFullYear()}-${today.getMonth()<9?'0':''}${today.getMonth()+1}-${today.getDate()<10?'0':''}${today.getDate()}`;
  let time = `${today.getHours()<10?'0':''}${today.getHours()}:${today.getMinutes()<10?'0':''}${today.getMinutes()}:${today.getSeconds()<10?'0':''}${today.getSeconds()}`;
  return date + 'T' + time + offset;
}

export default GenerateTimestamp;