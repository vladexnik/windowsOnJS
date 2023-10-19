import img1 from'../../assets/img/our_works/big_img/1.png'
import img2 from'../../assets/img/our_works/big_img/2.png'
import img3 from'../../assets/img/our_works/big_img/3.png'
import img4 from'../../assets/img/our_works/big_img/4.png'
import img5 from'../../assets/img/our_works/big_img/5.png'
import img6 from'../../assets/img/our_works/big_img/6.png'
import img7 from'../../assets/img/our_works/big_img/7.png'
import img8 from'../../assets/img/our_works/big_img/8.png'

const imageMap = {
    '#1': img1,
    '#2': img2,
    '#3': img3,
    '#4': img4,
    '#5': img5,
    '#6': img6,
    '#7': img7,
    '#8': img8,
}

const images=()=>{
    const imgPopup=document.createElement('div'),
        workSection=document.querySelector('.works'),
        bigImage=document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent='center';
    imgPopup.style.alignItems='center';
    imgPopup.style.display='none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click',(e)=>{
        e.preventDefault();
        let target=e.target;

        if(target && target.classList.contains('preview')){

            imgPopup.style.display='flex';
            const path=target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', imageMap[path]);
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display='none';
        }

    })

}

export default images;