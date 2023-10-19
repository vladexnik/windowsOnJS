import checkNumInputs from './checkNumInputs';
import { db } from './firebaseConfig';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 


const forms=(state)=>{

    const form=document.querySelectorAll('form'),
        inputs=document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');
  
    const message={
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    }

    const postData=async (url, data)=>{
        document.querySelector('.status').textContent=message.loading;
        const payload = {};
        data.forEach((value,key)=>{
            payload[key]=value;
        })        
        await addDoc(collection(db, "orders"), payload); 

    }

    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault(); // без перезагрузки стр

            let statusMessage=document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData=new FormData(item); // отправка форм

            if(item.getAttribute('data-calc')==="end"){
                for (let key in state){
                    formData.append(key, state[key]); //добавляет к объекту поле с именем key и значением state[key]
                }
            }
            postData('assets/server.php', formData)
                .then(res=> {
                    
                    statusMessage.textContent=message.success;
                })
                .catch((e)=>{
                    
                    statusMessage.textContent=message.failure
                })
                .finally(()=>{
                    clearInputs();
                   
                    // 
                    setTimeout(() => {
                        statusMessage.remove();
                        let divModal=document.querySelector('.popup_calc_end');
                        divModal.style.display='none';     
                        document.body.style.overflow='visible';
                        Object.keys(state).forEach(key => delete state[key]);
                    }, 2000);
                })

        });
    });

    const clearInputs=()=>{
        inputs.forEach(item=> {
            item.value='';
        });
    };

}

export default forms;