const findBlockBayAlias = (alias) =>{
    $(".reviews__item").filter((ndx, item)=>{
        return $(item).attr("data-linked-with") == alias
    });
};

$("reviews__switcher__link").click((e)=>{

e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockBayAlias(target);
    const curItem = $this.closest(".reviews__switcher__item");
    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active")})
