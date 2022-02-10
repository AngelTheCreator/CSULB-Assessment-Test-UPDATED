// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Angel Guevara" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let totalQuantity = 0;

function updateQuantity(displayQuantity){
    let totalQuantity = document.querySelector('#qty-total');
   totalQuantity.textContent = displayQuantity;
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

//Gingerbread Section

     //Gingerbread Quantity
     let gbQuant = document.querySelector('#qty-gb')
     gbQuant.textContent = gb;
     gbQuant = gb
    //Add Gingerbread
    const gbPlusBtn = document.querySelector('#add-gb')
    gbPlusBtn.addEventListener('click', function(e) {
    
        gbQuant++;
        totalQuantity++;
        const gbDisplay = document.getElementById('qty-gb');
        gbDisplay.textContent = gbQuant;
        updateQuantity(totalQuantity);
        
    })
    //Minus Gingerbread    
    const gbMinusBtn = document.querySelector('#minus-gb')
    gbMinusBtn.addEventListener('click', function(){
       
        if (gbQuant > 0){
            console.log('clicked')   
            gbQuant--;
            totalQuantity--;
            const gbDisplay = document.getElementById('qty-gb');
            gbDisplay.textContent = gbQuant;
            updateQuantity(totalQuantity);
            
        }
    } )
    
    //Update Quantity
    

   

//Choco Chip Section

    //Choco Chip Quantity
    var ccQuant = document.querySelector('#qty-cc')
    ccQuant = cc
    //Add Choco Chip
    const ccPlusBtn = document.querySelector('#add-cc')
    ccPlusBtn.addEventListener('click', function(e){
    
    ccQuant++; 
    totalQuantity++;
    const ccDisplay = document.getElementById('qty-cc');
    ccDisplay.textContent = ccQuant;
    updateQuantity(totalQuantity);
        
    })
    //Minus Choco Chip
    const ccMinusBtn = document.querySelector('#minus-cc')
    ccMinusBtn.addEventListener('click', function(){
    if (ccQuant > 0){
        
        ccQuant--;
        totalQuantity--;
        const ccDisplay = document.getElementById('qty-cc');
        ccDisplay.textContent = ccQuant;
        updateQuantity(totalQuantity);
        
    }    
    })

//Sugar Sprinkle Section
    //Sugar Sprinkle Quantity
    var ssQuant = document.querySelector('#qty-sugar')
    ssQuant = sugar
    //Add SS
    const ssPlusBtn = document.querySelector('#add-sugar')
    ssPlusBtn.addEventListener('click', function(){
    
    ssQuant++; 
    totalQuantity++;
    const ssDisplay = document.getElementById('qty-sugar');
    ssDisplay.textContent = ssQuant;
    updateQuantity(totalQuantity);
    
    })
    //Minus SS
    const ssMinusBtn = document.querySelector('#minus-sugar')
    ssMinusBtn.addEventListener('click',function(){
    if (ssQuant > 0){
        
        ssQuant--
        totalQuantity--;
        const ssDisplay = document.getElementById('qty-sugar');
        ssDisplay.textContent = ssQuant;
        updateQuantity(totalQuantity);
        
    }
    })
   






credit.textContent = `Created by ${yourName}`