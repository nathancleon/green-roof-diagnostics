'use strict';
/* global $ */

$( document ).ready(function() {
  populateDivs();
  stickyNav();
  showRotationalContent();
});

function populateDivs() {
  const content = [
    {
      index:    0, // even = image on right && background color
      id:       'greening', // id of the section; must be a match
      title:    'Greening',
      author:   'Charlie Miller, Advisor',
      name:     'Charlie',
      headshot: 'charlie-miller.jpg',
      image:    'g1.jpg',
      quotes: [
        'Green infrastructure focuses on <span class="copy-emphasis">cost-effective</span>, <span class="copy-emphasis">living</span>, <span class="copy-emphasis">upstream</span> solutions.',
        'Green infrastructure harnesses the power of nature to provide primary and <span class="copy-emphasis">secondary benefits</span>',
      ],
    },
    {
      index:    1, // odd = image on left && no background color
      id:       'validating', // id of the section; must be a match
      title:    'Validating',
      author:   'Laura Supple, Environmental Engineer',
      name:     'Laura',
      headshot: 'laura-supple.jpeg',
      image:    'i2.jpg',
      quotes: [
        'We measure, quantify, and <span class="copy-emphasis">validate</span> the effectiveness of green infrastructure. We think the industry benefits from this <span class="copy-emphasis">de-mystification</span>.',
        'We help design teams can utilize green roofs <span class="copy-emphasis">confidently</span>, with <span class="copy-emphasis">ROI</span> for the developer and the environment.',
      ],
    },
    {
      index:    2, // even = image on right && background color
      id:       'innovating', // id of the section; must be a match
      title:    'Innovating',
      author:   'Brad Garner, Software Engineer',
      name:     'Brad',
      headshot: 'brad-garner.jpg',
      image:    'v5.png',
      quotes: [
        'Responding and adapting to our climate requires <span class="copy-emphasis">innovation</span>, and the best ideas may come from anywhere!',
        'We help <span class="copy-emphasis">manufacturers and inventors</span> evaluate their <span class="copy-emphasis">sustainable solutions</span>, through rigorous testing and monitoring.',
      ],
    },
    {
      index:    3, // odd = image on left && no background color
      id:       'leading', // id of the section; must be a match
      title:    'Leading',
      author:   'Joshua Robinson, Hydrologic Engineer',
      name:     'Joshua',
      headshot: 'joshua-robinson.jpeg',
      image:    'i1.png',
      quotes: [
        'Green Roof Diagnostics was founded to provide scientific and technical leadership within the green roof industry. Our success is when <span class="copy-emphasis">all sails rise</span>.',
        '<span class="copy-emphasis">Testing</span> is critical to our work. We test products and concepts from anyone. We try to handle this work in a rigorous, <span class="copy-emphasis">data-driven</span> manner for optimal benefit to all parties.',      
      ],
    },
    {
      index:    4, // even = image on right && background color
      id:       'living', // id of the section; must be a match
      title:    'Living',
      author:   'Anna Zakrisson, Soil Biologist',
      name:     'Anna',
      headshot: 'anna-zakrisson.jpg',
      image:    'l1.jpg',
      quotes: [
        'Green infrastructure is <span class="copy-emphasis">alive!</span>  Our work is holistic, including <span class="copy-emphasis">soil biology</span> and <span class="copy-emphasis">water quality</span>.',
        'Though synergistic benefits are well understood within larger ecosystems, such as forests and meadows, the biology and chemistry of smaller, more <span class="copy-emphasis">urban ecosystems</span> possesses mysteries we aim to unlock and harness for good.',
      ],
    },
  ];
  content.forEach((c,i)=>{
    const readMore = `<span class="copy-text-read-more" id="${c.id}ReadMore">... read more ...</span>`;

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