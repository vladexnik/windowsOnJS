import checkNumInputs from './checkNumInputs';

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
        let res=await fetch(url, {
                method: "POST",
                body: data
            });   
            return await res.text();
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
                    console.log(res);
                    statusMessage.textContent=message.success;
                })
                .catch(()=>{
                    statusMessage.textContent=message.failure
                })
                .finally(()=>{
                    clearInputs();
                   
                    // 
                    setTimeout(() => {
                        statusMessage.remove();
                       // document.body.classList.remove('modal-open');   
                        
                        let divModal=document.querySelector('.popup_calc_end');
                        divModal.style.display='none';     
                        document.body.style.overflow='visible';
                        Object.keys(state).forEach(key => delete state[key]);
                    }, 1000);
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