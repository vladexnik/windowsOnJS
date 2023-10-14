const checkNumInputs=(selector)=>{

    const numInputs=document.querySelectorAll(selector);

    numInputs.forEach(item=>{
        item.addEventListener('input',()=>{
            item.value=item.value.replace(/[^0-9]/,"");
        })
    });


}

export default checkNumInputs;