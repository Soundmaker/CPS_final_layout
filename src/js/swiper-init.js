if (window.innerWidth < 426) {
  const techSlider = new Swiper('.tech', {
    slidesPerView: 'auto',
    wrapperClass: 'tech-list',
    slideClass: 'tech-list__item',
    pagination: {
      el: '.tech-pagination',
      clickable: true
    }
  })

  const brandsSlider = new Swiper('.brands', {
    slidesPerView: 'auto',
    wrapperClass: 'brands__list',
    slideClass: 'brands__item',
    pagination: {
      el: '.brands-pagination',
      clickable: true
    }
  })

  const pricesSlider = new Swiper('.prices__table', {
    slidesPerView: 'auto',
    wrapperClass: 'prices__t-body',
    slideClass: 'prices__t-row',
    pagination: {
      el: '.prices-pagination',
      clickable: true
    }
  })
}
