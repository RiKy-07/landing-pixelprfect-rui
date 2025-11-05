

function set_class_to_active(){
    let accordions = document.querySelector('.process_card');
    let process_image = document.querySelector('.image_plus');
    
    accordions.classList.toggle('process_card_active');

    if(process_image.src.includes("/public/assets/svgs/plus.svg")){
        process_image.setAttribute('src', '/public/assets/svgs/minus.svg');
    }else{
        process_image.setAttribute('src', '/public/assets/svgs/plus.svg');
    }
}
