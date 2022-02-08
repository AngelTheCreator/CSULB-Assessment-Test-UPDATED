// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Angel Guevara" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

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
    console.log(gbQuant)
        gbQuant++;
        const gbDisplay = document.getElementById('qty-gb');
        gbDisplay.textContent = gbQuant;
    })
    //Minus Gingerbread    
    const gbMinusBtn = document.querySelector('#minus-gb')
    gbMinusBtn.addEventListener('click', function(e){
        if (gbQuant > 0){
            console.log(gbQuant)
            gbQuant--;
            const gbDisplay = document.getElementById('qty-gb');
            gbDisplay.textContent = gbQuant;
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
    console.log(ccQuant)
    ccQuant++; 
    const ccDisplay = document.getElementById('qty-cc');
    ccDisplay.textContent = ccQuant;
    })
    //Minus Choco Chip
    const ccMinusBtn = document.querySelector('#minus-cc')
    ccMinusBtn.addEventListener('click', function(){
    if (ccQuant > 0){
        console.log(ccQuant)
        ccQuant--;
        const ccDisplay = document.getElementById('qty-cc');
        ccDisplay.textContent = ccQuant;
    }    
    })

//Sugar Sprinkle Section
    //Sugar Sprinkle Quantity
    var ssQuant = document.querySelector('#qty-sugar')
    ssQuant = sugar
    //Add SS
    const ssPlusBtn = document.querySelector('#add-sugar')
    ssPlusBtn.addEventListener('click', function(){
    console.log(ssQuant)
    ssQuant++; 
    const ssDisplay = document.getElementById('qty-sugar');
    ssDisplay.textContent = ssQuant;
    })
    //Minus SS
    const ssMinusBtn = document.querySelector('#minus-sugar')
    ssMinusBtn.addEventListener('click',function(){
    if (ssQuant > 0){
        console.log(ssQuant)
        ssQuant--
        const ssDisplay = document.getElementById('qty-sugar');
        ssDisplay.textContent = ssQuant;
    }
    })


credit.textContent = `Created by ${yourName}`