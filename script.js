var strSum=prompt ("შეიყვანეთ თანხა")

if(strSum<=100){
    alert("დაბალი ხელფასი")
}
else if(strSum>100 && strSum<=500){
    alert("საშუალო ხელფასი")
}
else{
    alert("კაი ხელფასი")
}


var mas=[1,4,18,24,15,2,3,19,55];
for(var i=0; i < mas.length; i++){
    if (mas[i]%2==0){
        document.write(mas[i]+" ");
    }
    }
