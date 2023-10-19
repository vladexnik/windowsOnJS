const modals=()=>{

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay=true){

        const trigger=document.querySelectorAll(triggerSelector),
            modal=document.querySelector(modalSelector),
            close=document.querySelector(closeSelector),
            windows=document.querySelectorAll('[data-modal]'),
            scroll=calcScroll();

        trigger.forEach(item => 
            item.addEventListener('click', (e)=>{
                if(e.target) {
                    e.preventDefault(); // чтоб a href не презагружал страницу, а выполнял открытие модалки
                }

                windows.forEach(item=>{
                    item.style.display='none';
                })

                
                modal.style.display='block';
                document.body.style.overflow='hidden';
                // document.body.classList.add('modal-open');
                document.body.style.marginRight=`${scroll}px`;
            })
        )
       
        close.addEventListener('click', ()=>{
            windows.forEach(item=>{
                item.style.display='none';
            })
            
            modal.style.display='none';
            document.body.style.overflow='';
        //    document.body.classList.remove('modal-open');

            document.body.style.marginRight=`0px`;
        });

        modal.addEventListener('click', (e)=>{ // закрытие по серой зоне вокруг модалки
            if(e.target===modal && closeClickOverlay){

                windows.forEach(item=>{
                    item.style.display='none';
                })

                modal.style.display='none';
                document.body.style.overflow='';
            //    document.body.classList.remove('modal-open');

                 document.body.style.marginRight=`0px`;

            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" ) { 
                windows.forEach(item=>{
                    item.style.display='none';
                })

                modal.style.display='none';
                document.body.style.overflow='';
                document.body.style.marginRight=`0px`;
            }
        });
    }

    function showModalByTime(selector, time){
        setTimeout(() => {
            document.querySelector(selector).style.display='block';
            document.body.style.overflow='hidden';
        }, time);
    }


    function calcScroll(){ // чтоб не дергалось при открытии модалки
        let div=document.createElement('div');

        div.style.width='50px';
        div.style.height='50px';
        div.style.overflowY='scroll';
        div.style.visibility='hidden';

        document.body.appendChild(div);
        let scrollWidth=div.offsetWidth-div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
    bindModal('.popup_calc_btn', '.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close', false);
    
    bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);

};

export default modals;