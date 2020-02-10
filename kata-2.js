function dateNow(){
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  
  if(day < 10) day= '0' + day;

  if(month < 10) month = '0' + month;
  
  return year + '-' + month + '-' + day
};
 
function dayEndYear(){
  let dateStart = new Date(dateNow()).getTime();
  let dateEnd = new Date('2020-12-31').getTime();
  
  let dayEndYear = (dateEnd - dateStart) / (1000*60*60*24);
  
  return dayEndYear;
}