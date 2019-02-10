 let selectedIconId = 1;
 let expanded = true;
 
 toggleExpandIcon = (id) => {
    //Reset previous selected icon
    const prevSelectedIcon = document.getElementById('expand-icon-' + selectedIconId);
    prevSelectedIcon.classList.remove('fa-caret-up');
    prevSelectedIcon.classList.add('fa-caret-down');   

    //Expand the newly selected tab IF it wasnt the previous
    const selectedIcon = document.getElementById('expand-icon-' + id);
    if(id !== selectedIconId || !expanded){
        selectedIcon.classList.remove('fa-caret-down');
        selectedIcon.classList.add('fa-caret-up');
        expanded = true;
    }
    else{
        expanded = false;
    }
    
    selectedIconId = id; 
}