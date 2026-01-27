ข้อ 3.1 

let sumEven = 0; // สร้างตัวเเปรเก็บค่า ของผลคูณ เเละ ผลรวม โดยจะเเยกตัวเลขที่จะทำการ loop เพื่อไม่ให้ค่าผิดพลาด //
let numsum = 1;
let ProductOdd = 1;
let numOdd = 1;

while (numsum <=50) {            // ขั้นตอนนี้การ loop เพื่อให้ numsum ค่อยเพิ่มจำนวนจาก 1 ไปถึง 50 หรือตามเงื่อนไขที่เราตั้ง //
   if (numsum % 2 === 0 )        // มีเงือนไขที่ว่า ถ้าเลขอะไรที่ /2 ลงตัวให้ทำเงือนไขต่อไป เเพื่อเป็นการหาเลขคู่ // 
    sumEven += numsum;           // เเล้วก็จะเป็น sumEven = sumEven + numsum // 
    numsum++;                    // เเ้ลวก็บวกจำนวนไปจงถึง 50 //
}
while (numOdd <=10) {        // อันนี้ก็จะค้ลายๆกับเลขคู่ เเต่จะเปลี่ยนเงื่อนไขที่ว่า ถ้าเลขอะไรก็เเล้วเเต่ /2 ไม่ลงตัว ให้ทำเงื่อนไขต่อไป เพื่อเป็นการเเบ่งเลขคี่่ //
   if (numOdd % 2 != 0 )
    ProductOdd *= numOdd;
 numOdd++;
}

console.log(sumEven)               // print ตัวเเปรเอาผลลัพธ์ออกมา // 
console.log(ProductOdd)             // print ตัวเเปรเอาผลลัพธ์ออกมา // 




function BmiCal(weight,height) {                                             // ตั้งชื่อ function เเละ ชื่อตัวเเปรใน parameter / /
    
    height = height / 100                                                      // สูตรหาค่า BMI ต้องเเปงความสูงจาก m > cm โดยเอาตัวเเปร height ไปหาร 100 เเล้วเก็บที่ height // 
    let BMI = (weight / (height * height))                                    // ตั้งชื่อตัวเเปร BMI ให้เก็บค่าคำนวณ BMI //
    if (BMI <= 18.5) {                                                        // เช็คเงื่อนไขว่า BMI น้อยกว่า 18.5 ไหม ถ้าใช่ print ผลลัพธ์ เเละเวลา print จะใช่ toFixed(2) เพื่อให้มีทศนิยม 2 ต่ำเเหน่ง //
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category ผอม');          // ถ้าไม่ใช่ เงือนไขก่อนหน้า ให้มาเช็คเงื่อนไขต่อไปว่าใช่ไหม // 
    } else if (BMI >= 18.5 && BMI < 25 ) {                                   
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category ปกติ');
    } else if (BMI >=25 && BMI < 30 ) {
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category อ้วน');
    } else if (BMI > 30) 
        console.log('คุณทีค่า BMI :', BMI.toFixed(2),'Category อ้วนมาก');
    
};
BmiCal(60,175);


