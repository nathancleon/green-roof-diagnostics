'use strict';
/* global $ */

$( document ).ready(function() {
  populateDivs();
  stickyNav();
  showRotationalContent();
  imageSlider();
  peopleCardsData();
});

function populateDivs() {
  const  em = '<span class="copy-emphasis">';
  const _em = '</span>';
  const content = [
    {
      id:       'content01', // id of the section; must be a match
      title:    'We start at the top',
      author:   'Charlie Miller, Advisor',
      name:     'Charlie',
      headshot: 'charlie-miller.jpg',
      image:    'g1.jpg',
      quotes: [
        `Green infrastructure focuses on cost-effective, living, ${em}upstream${_em} solutions. And there is no-where farther up stream than the roof!`,
        `${em}<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a>${_em} is so powerful, because it harnesses the power of nature to provide primary and ${em}secondary benefits${_em}`,
      ],
    },
    {
      id:       'content02', // id of the section; must be a match
      title:    'We lead',
      author:   'Joshua Robinson, Hydrologic Engineer',
      name:     'Joshua',
      headshot: 'joshua-robinson.jpeg',
      image:    'i1.png',
      quotes: [
        `Green Roof Diagnostics was founded to provide scientific and technical leadership within the green roof industry. Our success is when ${em}all sails rise${_em}.`,
        `${em}Testing${_em} is critical to our work. We test products and concepts from anyone. We try to handle this work in a rigorous, ${em}data-driven${_em} manner for optimal benefit to all parties.`,
      ],
    },
    {
      id:       'content03', // id of the section; must be a match
      title:    'We verify',
      author:   'Laura Supple, Environmental Engineer',
      name:     'Laura',
      headshot: 'laura-supple.jpeg',
      image:    'i2.jpg',
      quotes: [
        `We measure, quantify, and ${em}validate${_em} the effectiveness of green infrastructure. We think the industry benefits from this ${em}de-mystification${_em}.`,
        `We help design teams can utilize green roofs ${em}confidently${_em}, with ${em}ROI${_em} for the developer and the environment.`,
      ],
    },
    {
      id:       'content04', // id of the section; must be a match
      title:    'We take on challenges',
      author:   'Brad Garner, Software Engineer',
      name:     'Brad',
      headshot: 'brad-garner.jpg',
      image:    'v5.png',
      quotes: [
        `Responding and adapting to our climate requires ${em}innovation${_em}, and the best ideas may come from anywhere!`,
        `We help ${em}manufacturers and inventors${_em} evaluate their ${em}sustainable solutions${_em}, through rigorous testing and monitoring.`,
      ],
    },
    {
      id:       'content05', // id of the section; must be a match
      title:    'Our work is alive!',
      author:   'Anna Zakrisson, Soil Biologist',
      name:     'Anna',
      headshot: 'anna-zakrisson.jpg',
      image:    'l1.jpg',
      quotes: [
        `Green infrastructure is ${em}alive!${_em}  Our work is holistic, including ${em}soil biology${_em} and ${em}water quality${_em}.`,
        `Though synergistic benefits are well understood within larger ecosystems, such as forests and meadows, the biology and chemistry of smaller, more ${em}urban ecosystems${_em} possesses mysteries we aim to unlock and harness for good.`,
      ],
    },
  ];
  content.forEach((c,i)=>{
    const readMore = `<span class="copy-text-read-more" id="${c.id}ReadMore">... read more ...${_em}`;

    const quotes = c.quotes.map((q,j)=>{
      if(j === 0) {
        return `<div class="copy-text-container copy-open-quote">
          <p class="copy-text text-left">${q}</p>
        </div>`;
      } else if(j === c.quotes.length - 1){
        return `<div class="copy-text-container copy-close quote">
          <p class="copy-text copy-close-quote text-left tooltip">${q}${readMore}</p>
        </div>`;
      } else {
        return `<div class="copy-text-container">
          <p class="copy-text text-left">${q}</p>
        </div>`;
      }
    });

    const reverseQuote = i%2 === 0 ? '' : 'order2';
    const reverseImage = i%2 === 0 ? '' : 'order1';

    const h = `<div class="section_content">
      <div class="content-copy ${reverseQuote}">
        <div class="image-container">
          <div class="img-round" style="background-image: url(${c.headshot});"></div>
        </div>
        <h2 class="copy-header">${c.title}</h2>
        <div class="content-quote-container">
          ${quotes.join(' ')}
        </div>
        <div class="content-author-container">
          <div class="content-author-inner-container tooltip">
            <div class="popover">
              <p>read more about ${c.name}</p>
            </div>
            <p class="content-author">~ ${c.author}</p>
          </div>
        </div>
      </div>
      <div class="slider-container">
        <div class="img-slider">
        <div class="slider fade">
          <img src="./g1.jpg"/>
        </div>
        <div class="slider fade">
          <img src="./g2.jpg"/>
        </div>
        <div class="slider fade">
          <img src="./g3.jpg"/>
        </div>
        <div class="slider fade">
          <img src="./g4.jpg"/>
        </div>
        <svg class="slide-left arrow" data-index="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="#fff" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"/></svg>
        <svg class="slide-right arrow" data-index="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="#fff" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"/></svg>
        </div>
        <div class="slider-dots">
          <span id="dot-1" class="dot dot-active"></span> 
          <span id="dot-2" class="dot"></span> 
          <span id="dot-3" class="dot"></span> 
          <span id="dot-4" class="dot"></span>
        </div>
      </div>
    </div>`;

    $(`#${c.id}`).html(h);  
    if(i%2 === 0){
      $(`#${c.id}`).addClass('bg-color');
    }
    console.log(`#${c.id}ReadMore`);
    $(`#${c.id}`).on('click','#greeningReadMore', function(){console.log(c.name);});
    
  });
}

function stickyNav() {
  var isVisible = false;
  $(window).scroll(function(){
    var shouldBeVisible = $(window).scrollTop()>700;
    if (shouldBeVisible && !isVisible) {
      isVisible = true;
      $('.nav').removeClass('sticky');
      $('.nav').show();
    } else if (isVisible && !shouldBeVisible) {
      isVisible = false;
      $('.nav').hide();
    }
  });
}

function showRotationalContent() {
  var isVisible = false;
  $(window).scroll(function(){
    var shouldBeVisible = $(window).scrollTop()>250;
    if (shouldBeVisible && !isVisible) {
      isVisible = true;
      $('.rotational-content').css('visibility', 'visible').hide().fadeIn(1000);
    }
  });
}

function imageSlider() {
  let sliderIndex = 0;
  let slideLeft = $('.slide-left');
  let slideRight = $('.slide-right');

  slideLeft.click(function(event){
    let index = $(this).data('index');
    let imgSlider = $(this).parent().children('.slider');
    let dotSlider = $(this).parent().next('.slider-dots').children();
    showSlider(--sliderIndex, imgSlider, dotSlider);
    if(sliderIndex <= 0) {
      sliderIndex = 0;
    }
    $(this).parent().children('.arrow').data('index', index - 1);
  });

  slideRight.click(function(event){
    let index = $(this).data('index');
    let imgSlider = $(this).parent().children('.slider');
    let dotSlider = $(this).parent().next('.slider-dots').children();
    showSlider(++sliderIndex, imgSlider, dotSlider);
    if(sliderIndex >= imgSlider.length - 1) {
      sliderIndex = imgSlider.length - 1;
    } 
    $(this).parent().children('.arrow').data('index', index + 1);
  });

    $('.dot').click(function() {
      let dotIndex = $(this).index();
      console.log(dotIndex);
      let imgSlider = $(this).parent().parent().children('.img-slider').children('.slider');
      let dotSlider = $(this).parent().children();
      console.log(dotSlider);
      $(this).addClass('dot-active').siblings().removeClass('dot-active');
      showSlider(sliderIndex = dotIndex, imgSlider, dotSlider);
    });
}

function showSlider(index, slider, dots){
    for(var i = 0 ; i < slider.length ; i++ ){
      slider[i].style.display = "none";
      dots[i].classList.remove('dot-active');
    } 
    if(index <= 0) {
      index = 0;
    }
    if(index >= slider.length - 1) {
      index = slider.length - 1;
    } 
    slider[index].style.display = "block";
    dots[index].classList.add('dot-active');
}

function peopleCardsData() {
  let people = [
    {
      cardImg: 'anna-zakrisson.jpg',
      name: 'Anna Zakrisson',
      title: 'Soil Biologist',
      bio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities',
      fullBio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities'
    },
    {
      cardImg: 'oscar-warmerdam.jpeg',
      name: 'Oscar Warmerdam',
      title: 'CEO',
      bio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities',
      fullBio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities'
    },
    {
      cardImg: 'brad-garner.jpg',
      name: 'Brad Garner',
      title: 'Software Engineer',
      bio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities',
      fullBio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities'
    },
    {
      cardImg: 'joshua-robinson.jpeg',
      name: 'Joshua Robinson',
      title: 'Stormwater Engineer',
      bio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities',
      fullBio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities'
    },
    {
      cardImg: 'laura-supple.jpeg',
      name: 'Laura Supple',
      title: 'Environmental Engineer',
      bio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities',
      fullBio: 'I am intrigued by the possibility of creating sustainable ecosystems within cities'
    }
  ];

  peopleCards(people);
}

function peopleCards(people) {

  for(let i = 0; i < people.length; i++) {
    $('.card-left').children('.card-img').attr('src', `${people[i - 1].cardImg}`);
    $('.card-left').children('.card-name').html(`${people[i - 1].name}`);
    $('.card-left').children('.card-title').html(`${people[i - 1].title}`);
    $('.card-left').children('.card-content').html(`${people[i - 1].bio}`);

    $('.people-cards').children('.card-img').attr('src', `${people[i].cardImg}`);
    $('.people-cards').children('.card-name').html(`${people[i].name}`);
    $('.people-cards').children('.card-title').html(`${people[i].title}`);
    $('.people-cards').children('.card-content').html(`${people[i].bio}`);

    $('.card-right').children('.card-img').attr('src', `${people[i + 1].cardImg}`);
    $('.card-right').children('.card-name').html(`${people[i + 1].name}`);
    $('.card-right').children('.card-title').html(`${people[i + 1].title}`);
    $('.card-right').children('.card-content').html(`${people[i + 1].bio}`);
  }
}