const openItem = item =>{
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.Height();

    container.addClass(;active)
    contentBlock.Height(reqHeight);
}

const closeEveryItem = container =>{
    const item = container.find(".team__content");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    item.Height(0)
}

$(".team__title").click(e =>{
    const $this = $ (e.currentTarget);
    const container = $this.closest(".team")
    const elemConteiner = $this.closest(".team__item");


    if(elemConteiner.hasClass("active")){
        closeEveryItem(container)
    }else{
        closeEveryItem(container)
        openItem($this);
    }

})