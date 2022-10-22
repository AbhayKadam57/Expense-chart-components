import data from './data.json' assert {type: 'json'};

const bar = [...document.querySelectorAll(".bar")]

const info = [...document.querySelectorAll(".info")]

bar.map((item_1,index_1)=>{

    data.map((item,index_2)=>{

        if(index_1===index_2){

            item_1.style.height=item.amount+"%"
        
            info.map((item_3,index_3)=>{

                if(index_1===index_3){
    
                    item_3.innerText=item.amount+"%"
                }
    
            })
        }

       
    })

})