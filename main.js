'use strict';
/* global $ */

$( document ).ready(function() {
  populateDivs();
  stickyNav();
  showRotationalContent();
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
      <div class="content-img ${reverseImage}">
        <img class="content-img-src" src="${c.image}"/>
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
    var shouldBeVisible = $(window).scrollTop()>765;
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
      $('.new-content').css('display', 'flex').hide().fadeIn(1000);
    }
  });
}