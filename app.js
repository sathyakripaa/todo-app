var listOfActivities=[];

var input=document.getElementById("input");

var todolist=document.getElementById("todolist");

document.getElementById("button").onclick=click;



function click(){
    listOfActivities.push(input.value)
    console.log(listOfActivities);
    input.value=""
    showList()
}


function showList(){
  
    todolist.innerHTML = " "
    listOfActivities.forEach( function(current_value,index) {todolist.innerHTML += ("<li>"+current_value+"<a onclick='editItem("+index+")'>Edit</a>"+"<a onclick='deleteItem("+index+")'>&times | </a></li>")
 
   } )
}

    function editItem(index){
        var newValue=prompt("please enter new value");
        listOfActivities.splice(index,1,newValue);
        showList();
    }

    function deleteItem(index){
        listOfActivities.splice(index,1);
        showList();
    }
