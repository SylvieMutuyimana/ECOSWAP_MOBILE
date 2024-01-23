const getRandomInt= (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomDate=()=>{
    const day = getRandomInt(1, 31);
    const month = getRandomInt(1, 12);
    const year = getRandomInt(2021, 2023);
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const randomDate = `${formattedDay}/${formattedMonth}/${year}`;

    return randomDate;
}
