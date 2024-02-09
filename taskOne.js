console.log('taskOne.js')


const mobile = {
        brand : "Samsung",
        name : "Samsung Galaxy S21 Ultra 5G",
        body :  "165.1 x 75.6 x 8.9 mm (6.5 x 2.98 x 0.35 in)",
        display : " Dynamic AMOLED 2X, 120Hz, HDR10+, 1500 nits (peak)",
        waterProof : true,
        color : ["Black", "Blue", "Purple", "White", "Indigo"],
        getObjectValue : function (){
               return `This is *${this.brand}. Model : *${this.name}. Body : *${this.body}.  Color : *${this.color[3]}`
        }
}

        const mobileDetails = mobile.getObjectValue()
        const name = mobile.name;
        const iswaterProof = mobile.waterProof;
console.log(name, iswaterProof)