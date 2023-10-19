
import checkNumInputs from './checkNumInputs';

const changeModalState=(state, validation, buttonSelector)=>{

    const windowForm=document.querySelectorAll('.balcon_icons_img'),
        windowWidth=document.querySelectorAll('#width'),
        windowHeight=document.querySelectorAll('#height'),
        windowType=document.querySelectorAll('#view_type'),
        windowProfile=document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionstoElements(event,elem, prop){
        elem.forEach((item,i)=>{
            item.addEventListener(event, ()=>{

                switch(item.nodeName){

                    case 'SPAN':
                        state[prop]=i;
                        break;
                    
                    case 'INPUT':


                        if(item.getAttribute('type')==='checkbox'){
                            i===0 ? state[prop]='Холодное' : state[prop]='Тёплое';

                            elem.forEach((box,j)=>{
                                box.checked=false;
                                if(i==j) {
                                    box.checked=true;
                                }
                            })
                        }
                        else { 
                            if(windowHeight.length)
                            state[prop]=item.value;
                        }
                       break;
                    
                    case 'SELECT':
                        state[prop]=item.value;
                        break;

                }
        //        
                const isValid = validation.every((key) => typeof state[key] ==='number' ? state[key] !== undefined : !!state[key]);
                const button = document.querySelector(buttonSelector);
                if (isValid) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', true);
                }

                
            })
        });
    }
    
    bindActionstoElements('click', windowForm, 'formOfWindow')
    bindActionstoElements('input', windowHeight,'height');
    bindActionstoElements('input', windowWidth,'width');
    bindActionstoElements('change', windowType, 'windowType');
    bindActionstoElements('change', windowProfile, 'windowProfile');

}

export default changeModalState;