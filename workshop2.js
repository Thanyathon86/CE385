function BmiCal(weight,height) {
    
    height = height / 100
    let BMI = (weight / (height * height))
    if (BMI <= 18.5) {
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category ผอม');
    } else if (BMI >= 18.5 && BMI < 25 ) {
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category ปกติ');
    } else if (BMI >=25 && BMI < 30 ) {
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category อ้วน');
    } else if (BMI > 30) 
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category อ้วนมาก');
    
};
BmiCal(60,175);


