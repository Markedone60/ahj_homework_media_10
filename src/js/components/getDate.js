export default function getDate() {
  const itemDate = new Date();
  const date = formatDate(itemDate.getDate());
  const month = formatDate(itemDate.getMonth() + 1);
  const year = formatDate(itemDate.getFullYear());
  const hours = formatDate(itemDate.getHours());
  const min = formatDate(itemDate.getMinutes());
  
  const dateSet = `${date}.${month}.${year} ${hours}:${min}`;

  return dateSet;
}

function formatDate(value){
  const returnValue = value < 10 ? `0${value}` : value;

  return returnValue;
}