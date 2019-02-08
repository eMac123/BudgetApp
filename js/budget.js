// create constructor inc and exp
// create data structure
// create method to store items in to he data
// create method to store everyting within localstorage
// create method to calculate percentage of the budget
// for week, month, each income/expen percentage comapring with all abudget
// create method to clear input values
// check if amount isn't NaN
// check are input aren't empty
// 





//    USER INTERFACE CONTROLLER
const UIController = (function() {

    const DOM =  {
        AddIncome: {
            incomCont: document.getElementById('addInc'),
            incomDescrip: document.getElementById('incExp'),
            incomAmount: document.getElementById('incAmount'),
            incomType: document.getElementById('incType'),
            incomBtn: document.getElementById('incomBtn'),
            incomeList: document.getElementById('incomeList')
        },
        AddExpensive: {
            expCont: document.getElementById('addExp'),
            expDescrip: document.getElementById('expDec'),
            expAmount: document.getElementById('expAmount'),
            expType: document.getElementById('expType'),
            expBtn: document.getElementById('expenBtn'),
            expensiveList: document.getElementById('expensiveList')
        },
        DOMstring: {
            listItem: '<li class="collection-item">%des% <span>$ %mon%</span><i class ="fas fa-trash-alt" id="delete"></i> </li>'
        }

    }


    return {
        
        publicDOM: function() {
            return DOM;
        },

        // method to add item
        addItem: function(itemHTML, domObj, domValue) {
            let html, newHTML;
            html = itemHTML;
            newHTML = html.replace('%des%', domValue.description);
            newHTML = newHTML.replace('%mon%', domValue.amount);
            domObj.insertAdjacentHTML('beforeend', newHTML);             
        }
        
    }
})();


//    BUDGET CONTROLLER
const BudgetController = (function() {


    return {
        // get input values from income
        collectValue: function(obj) {
            return {
                description: obj.incomDescrip.value,
                amount: obj.incomAmount.value,
                
            }

        },

        // get input values from exp
        collectValueEx: function(obj) {
            return {
                description: obj.expDescrip.value,
                amount: obj.expAmount.value,

            }
        }
    }

})();


//    GLOBAL CONTROLLER
const GlobalController = (function(UI,BUDGET) {

    // get  DOM from UI
    const DOMinc = UI.publicDOM();
    // get HTML list string from UI
    let HTML = DOMinc.DOMstring.listItem;



// income
    // get DOM income container
    let incCont = DOMinc.AddIncome.incomCont;
    // get list (ul) income
    let listIncCont = DOMinc.AddIncome.incomeList;
    // get  DOM (from this I'm gonna take input)
    let inputVal = DOMinc.AddIncome;
 
// expensive
    // get DOM exp container
    let expCont = DOMinc.AddExpensive.expCont;
    // get  list (ul) exp
    let listExpCont = DOMinc.AddExpensive.expensiveList;
    // get DOM (from this I'm gonna take input)
    let expVal = DOMinc.AddExpensive;







    
    

    // addEventListener
    const addEvent = function() {
        document.getElementById('toDo').addEventListener('click', function(e) {
                   console.log()
                    
                   // if e.target === income button then add item to the income UI
                   if (e.target.classList.contains('incomeBtn')) {

                       // get inc input value
                       let inpValue = BUDGET.collectValue(inputVal);                       
                       UI.addItem(HTML, listIncCont, inpValue);
                  // if e.target === exp button then add item to the exp UI
                   } else if (e.target.classList.contains('expensBtn')){

                       // get exp input value
                       let inpValueExp = BUDGET.collectValueEx(expVal);
                       UI.addItem(HTML, listExpCont, inpValueExp);
                       

                       
                   }
                   
        });
    }


     // function to add item to the UI, clear inputs, add item to the data structure, check if 
     // there isn't any empty values if there is ane empty value then throw error
     // when the item was added to the UI clear input values
     // also store everythinf to the localstorage

     



return {
    // this gonna add event listener and I have to invoke it outside module
    ini: function() {
          addEvent();
    }
}
})(UIController, BudgetController);


// Initialization 
GlobalController.ini();