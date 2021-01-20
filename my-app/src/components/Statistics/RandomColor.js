function GetRandomColor() {
    let color =
      'rgb(' +
      Math.round(Math.random() * 256) +
      ',' +
      Math.round(Math.random() * 256) +
      ',' +
      Math.round(Math.random() * 256) +
      ')';
  
    return color;
  }
  
  export default GetRandomColor;