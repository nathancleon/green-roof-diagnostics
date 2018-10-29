'use strict';
/* global $ */
let people;

$(document).ready(function () {
  populateDivs();
  stickyNav();
  showRotationalContent();
  viewMissionStatement()
  closeMissionStatement();
  imageSlider();
  peopleCardsData();
  closePeopleModal();
});

function populateDivs() {
  const em = '<span class="copy-emphasis">';
  const _em = '</span>';
  const content = [{
      id: 'content01', // id of the section; must be a match
      title: 'We start at the top',
      author: 'Charlie Miller, Advisor',
      name: 'Charlie',
      headshot: './assets/people/charlie-miller.jpg',
      image: './assets/images/g1.jpg',
      quotes: [
        `Green infrastructure focuses on cost-effective, living, ${em}upstream${_em} solutions. And there is no-where farther up stream than the roof!`,
        `${em}<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a>${_em} is so powerful, because it harnesses the power of nature to provide primary and ${em}secondary benefits${_em}`,
      ],
      fullQuote: [
        `Green infrastructure focuses on cost-effective, living, upstream solutions. And there is no-where farther up stream than the roof!`,
        `<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a> is so powerful, because it harnesses the power of nature to provide primary and secondary benefits`,
      ],
    },
    {
      id: 'content02', // id of the section; must be a match
      title: 'We lead',
      author: 'Joshua Robinson, Hydrologic Engineer',
      name: 'Joshua',
      headshot: './assets/people/joshua-robinson.jpeg',
      image: './assets/images/i1.png',
      quotes: [
        `Green Roof Diagnostics was founded to provide scientific and technical leadership within the green roof industry. Our success is when ${em}all sails rise${_em}.`,
        `${em}Testing${_em} is critical to our work. We test products and concepts from anyone. We try to handle this work in a rigorous, ${em}data-driven${_em} manner for optimal benefit to all parties.`,
      ],
      fullQuote: [
        `Green infrastructure focuses on cost-effective, living, upstream solutions. And there is no-where farther up stream than the roof!`,
        `<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a> is so powerful, because it harnesses the power of nature to provide primary and secondary benefits`,
      ],
    },
    {
      id: 'content03', // id of the section; must be a match
      title: 'We verify',
      author: 'Laura Supple, Environmental Engineer',
      name: 'Laura',
      headshot: './assets/people/laura-supple.jpeg',
      image: './assets/images/i2.jpg',
      quotes: [
        `We measure, quantify, and ${em}validate${_em} the effectiveness of green infrastructure. We think the industry benefits from this ${em}de-mystification${_em}.`,
        `We help design teams can utilize green roofs ${em}confidently${_em}, with ${em}ROI${_em} for the developer and the environment.`,
      ],
      fullQuote: [
        `Green infrastructure focuses on cost-effective, living, upstream solutions. And there is no-where farther up stream than the roof!`,
        `<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a> is so powerful, because it harnesses the power of nature to provide primary and secondary benefits`,
      ],
    },
    {
      id: 'content04', // id of the section; must be a match
      title: 'We take on challenges',
      author: 'Brad Garner, Software Engineer',
      name: 'Brad',
      headshot: './assets/people/brad-garner.jpg',
      image: './assets/images/v5.png',
      quotes: [
        `Responding and adapting to our climate requires ${em}innovation${_em}, and the best ideas may come from anywhere!`,
        `We help ${em}manufacturers and inventors${_em} evaluate their ${em}sustainable solutions${_em}, through rigorous testing and monitoring.`,
      ],
      fullQuote: [
        `Green infrastructure focuses on cost-effective, living, upstream solutions. And there is no-where farther up stream than the roof!`,
        `<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a> is so powerful, because it harnesses the power of nature to provide primary and secondary benefits`,
      ],
    },
    {
      id: 'content05', // id of the section; must be a match
      title: 'Our work is alive!',
      author: 'Anna Zakrisson, Soil Biologist',
      name: 'Anna',
      headshot: './assets/people/anna-zakrisson.jpg',
      image: './assets/images/l1.jpg',
      quotes: [
        `Green infrastructure is ${em}alive!${_em}  Our work is holistic, including ${em}soil biology${_em} and ${em}water quality${_em}.`,
        `Though synergistic benefits are well understood within larger ecosystems, such as forests and meadows, the biology and chemistry of smaller, more ${em}urban ecosystems${_em} possesses mysteries we aim to unlock and harness for good.`,
      ],
      fullQuote: [
        `Green infrastructure focuses on cost-effective, living, upstream solutions. And there is no-where farther up stream than the roof!`,
        `<a href='http://bradgarner.com' target='_blank'>Green infrastructure</a> is so powerful, because it harnesses the power of nature to provide primary and secondary benefits`,
      ],
    },
  ];
  content.forEach((c, i) => {
    const readMore = `<span class="copy-text-read-more" id="${c.id}ReadMore">... read more ...${_em}`;

    const quotes = c.quotes.map((q, j) => {
      if (j === 0) {
        return `<div class="copy-text-container copy-open-quote">
          <p class="copy-text text-left">${q}</p>
        </div>`;
      } else if (j === c.quotes.length - 1) {
        return `<div class="copy-text-container copy-close quote">
          <p class="copy-text copy-close-quote text-left tooltip">${q}${readMore}</p>
        </div>`;
      } else {
        return `<div class="copy-text-container">
          <p class="copy-text text-left">${q}</p>
        </div>`;
      }
    });

    const reverseQuote = i % 2 === 0 ? '' : 'order2';
    const reverseImage = i % 2 === 0 ? '' : 'order1';

    const h = 
    `<div class="section_content">
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
        <div class="${c.id}modal read-more-modal">
          <svg class="modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="#bbb" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
          <div class="read-more-modal-content">
            <h2 class="copy-header">${c.title}</h2>
            <div class="full-quote-container">
              <p class="full-quote">${c.fullQuote.join(' ')}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-container ${reverseImage}">
        <div class="img-slider">
        <div class="slider fade">
          <img src="./assets/images/g1.jpg"/>
        </div>
        <div class="slider fade" style="display: none;">
          <img src="./assets/images/g2.jpg"/>
        </div>
        <div class="slider fade" style="display: none;">
          <img src="./assets/images/g3.jpg"/>
        </div>
        <div class="slider fade" style="display: none;">
          <img src="./assets/images/g4.jpg"/>
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
    if (i % 2 === 0) {
      $(`#${c.id}`).addClass('bg-color');
    }
    console.log(`#${c.id}ReadMore`);
    $(`#${c.id}`).on('click', '#greeningReadMore', function () {
      console.log(c.name);
    });
    
    $(`#${c.id}ReadMore`).on('click', function(event) {
      event.preventDefault();
      $(`.${c.id}modal`).addClass('js-modal-active');
      $('.overlay').css('display', 'block');
    });

    $('.overlay').on('click', function() {
      if($('.js-modal-active').length > 0) {
        $('.read-more-modal').removeClass('js-modal-active');
        $('.overlay').css('display', 'none');
      }
    });

    $('.modal-close').on('click', function(event) {
      event.preventDefault();
      $('.read-more-modal').removeClass('js-modal-active');
      $('.overlay').css('display', 'none');
    });
  });
}

function stickyNav() {
  var isVisible = false;
  $(window).scroll(function () {
    var shouldBeVisible = $(window).scrollTop() > 700;
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
  $(window).scroll(function () {
    var shouldBeVisible = $(window).scrollTop() > 250;
    if (shouldBeVisible && !isVisible) {
      isVisible = true;
      $('.rotational-content').css('visibility', 'visible').hide().fadeIn(1000);
    }
  });
}

function viewMissionStatement() {
  $('.mission-btn').on('click', function(event) {
    event.preventDefault();
    $('.mission-modal').addClass('js-modal-active');
    $('.overlay').css('display', 'block');
  });
}

function closeMissionStatement() {
  $('.overlay').on('click', function() {
    if($('.js-modal-active').length > 0) {
      $('.mission-modal').removeClass('js-modal-active');
      $('.overlay').css('display', 'none');
    }
  });
  $('.modal-close').on('click', function(event) {
    event.preventDefault();
    $('.mission-modal').removeClass('js-modal-active');
    $('.overlay').css('display', 'none');
  });
}

function imageSlider() {
  let slideLeft = $('.slide-left');
  let slideRight = $('.slide-right');
  slideLeft.click(function (event) {
    let index = $(this).data('index');
    let imgSlider = $(this).parent().children('.slider');
    let dotSlider = $(this).parent().next('.slider-dots').children();
    if (index <= 0) {
      index = 0;
      return;
    }
    showSlider(index - 1, imgSlider, dotSlider);
    $(this).parent().children('.arrow').data('index', index - 1);
  });

  slideRight.click(function (event) {
    let index = $(this).data('index');
    let imgSlider = $(this).parent().children('.slider');
    let dotSlider = $(this).parent().next('.slider-dots').children();
    if (index >= imgSlider.length - 1) {
      index = imgSlider.length - 1;
      return;
    }
    showSlider(index + 1, imgSlider, dotSlider);
    $(this).parent().children('.arrow').data('index', index + 1);
  });

  $('.dot').click(function () {
    let dotIndex = $(this).index();
    let imgSlider = $(this).parent().parent().children('.img-slider').children('.slider');
    let dotSlider = $(this).parent().children();
    showSlider(dotIndex, imgSlider, dotSlider);
  });
}

function showSlider(index, slider, dots) {
  for (var i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
    dots[i].classList.remove('dot-active');
  }
  slider[index].style.display = "block";
  dots[index].classList.add('dot-active');
}

function peopleCardsData() {
  let index = {
    left: 0,
    mid: 1,
    right: 2
  }

  people = [
    {
      cardImg: "./assets/people/anna-zakrisson.jpg",
      name: "Anna Zakrisson",
      title: "Soil Biologist",
      bio: "I am intrigued by the possibility of creating sustainable ecosystems within cities. I am excited to work together with the highly qualified experts at GRD to create cutting-edge research that will have positive, direct and profound impacts on our future lives.",
      fullBio: "I am intrigued by the possibility of creating sustainable ecosystems within cities. As a Ph.D. biologist with degrees in plant science and microbial ecology (Cambridge University, Max-Planck Institute), I am excited to work together with the highly qualified experts at GRD to create cutting-edge research that will have positive, direct and profound impacts on our future lives. My time as VP of Content at a fast-growing digital marketplace made my approach result-orientated and pragmatic, and also made me see the benefits of effective communication. Science communication has since become both a passion and a profession of mine leading to consulting assignments in digital strategy. I also have extensive field-work experience from over 30 marine and jungle expeditions which has made me very resourceful and good at problem-solving. We are living in a rapidly changing world, and if we want to see a sustainable future, we need innovative and creative solutions. The challenge is to achieve true sustainability interweaving ecology, finance, regulations, and local conditions. At GRD I feel that I am doing that: creating a sustainable product with great financial benefits."
    },
    {
      cardImg: "./assets/people/oscar-warmerdam.jpeg",
      name: "Oscar Warmerdam",
      title: "CEO",
      bio: "I am intrigued by the possibility of creating sustainable ecosystems within cities. I am excited to work together with the highly qualified experts at GRD to create cutting-edge research that will have positive, direct and profound impacts on our future lives.",
      fullBio: "I am intrigued by the possibility of creating sustainable ecosystems within cities"
    },
    {
      cardImg: "./assets/people/brad-garner.jpg",
      name: "Brad Garner",
      title: "Software Engineer",
      bio: "I enjoy data, and I'm passionate about the environment. I also like working on a team with high standards. This is why I'm so happy to be at GRD.",
      fullBio: "I enjoy data, and I’m passionate about the environment. I also like working on a team with high standards. This is why I’m so happy to be at GRD. I’m responsible for GRD’s monitoring infrastructure, data collection and integrity, software development, and data visualization: basically anything that includes bits or numbers. I find this rewarding, largely due to my mutt of a professional background. I practiced traditional landscape architecture for 13 years, working with architects, developers, engineers, and environmental agencies. Then I led operations and product development at another green roof company, where I was exposed to more of the same parties, but from different perspective. Those 6 years taught me a lot about stormwater regulations, and were my start into stormwater research. In both prior careers I worked in construction: first in construction administration, then later in the construction supply chain. After two decades of design and construction work, I am thrilled to work on a team that is focused on delivering unsurpassed products and services to the design and construction industry. Otherwise I might view my job as writing functions, creating graphs, and managing databases. Instead I know those are just things I need to do, but my real work is helping professionals find better stormwater solutions, navigate the maze of data, and make more informed decisions."
    },
    {
      cardImg: "./assets/people/joshua-robinson.jpeg",
      name: "Joshua Robinson",
      title: "Stormwater Engineer",
      bio: "Growing up along a tidal creek in coastal South Carolina, I have always been inspired and humbled by the order and complexity of the natural world.",
      fullBio: "Growing up along a tidal creek in coastal South Carolina, I have always been inspired and humbled by the order and complexity of the natural world. My fascination with natural systems, coupled with my passion for design, led me to study engineering as an undergraduate, and then to graduate research in the burgeoning field of environmental hydraulics. This work introduced me to streams and entire watersheds that had been devastated by the effects of urbanization. Since then, I have worked to repair natural systems, and equally, to engender a spirit of land stewardship that views stormwater as a resource instead of a waste product. I am a licensed professional engineer with over fifteen years of experience as a water resources engineer, ecological engineer, and consulting hydrologist in private practice. I have extensive experience in the planning, design, engineering, permitting, construction, and management of aquatic ecosystem restoration and green stormwater infrastructure projects. My work represents a unique combination of ideas, rigorous scientific analysis, and design. In 2008, I founded Robinson Design Engineers, a collaborative consulting practice with offices in Charleston, SC and Asheville, NC. Since then, I have led a team of talented engineers, hydrologists, and designers engaged in a variety of project types. Through the years, in our struggle to find data-driven, physically-based methods for designing and managing living infrastructure systems, we began doing our own internal research to guide our work. This pursuit led to a collaboration that took shape as Green Roof Diagnostics. I’m thrilled for the opportunity to contribute the important work of elevating green infrastructure in professional practice and policy."
    },
    {
      cardImg: "./assets/people/laura-supple.jpeg",
      name: "Laura Supple",
      title: "Environmental Engineer",
      bio: "I am fascinated by the complex interactions between humans, nature, and the built environment. My passion for sustainable development has led me to volunteer on organic farms in Europe, the Americas, and New Zealand.",
      fullBio: "I am fascinated by the complex interactions between humans, nature, and the built environment. My passion for sustainable development has led me to volunteer on organic farms in Europe, the Americas, and New Zealand. I’ve also led design of stormwater infrastructure for government clients and implementation of urban streetscape projects for disadvantaged neighborhoods in Baltimore. I want to employ cutting-edge research to develop sustainable solutions to pressing challenges of the urban environment. I have experience in interdisciplinary research of urban stream restoration, landscape hydrology, global food ethics, sustainability policy, and electricity generation infrastructure modeling. At GRD, I manage laboratory operations, collect and analyze data, and collaborate on modeling efforts. Being on the GRD team allows me to bridge divides between disciplines and communicate scientific research in a way that is clear and compelling."
    }
  ];

  peopleCards(index, people);
  viewPeopleModal(people);

  $('.click-left').click(function() {
    index.left = decrementPeopleIndex(index.left, people.length);
    index.mid = decrementPeopleIndex(index.mid, people.length);
    index.right = decrementPeopleIndex(index.right, people.length);
    peopleCards(index, people);
  });

  $('.click-right').click(function() {
    index.left = incrementPeopleIndex(index.left, people.length);
    index.mid = incrementPeopleIndex(index.mid, people.length);
    index.right = incrementPeopleIndex(index.right, people.length);
    peopleCards(index, people);
  });
}

function decrementPeopleIndex(index, length) {
  if(index - 1 < 0) {
    return length - Math.abs(index - 1);
  } else {
    return index - 1;
  }
}

function incrementPeopleIndex(index, length) {
  if(index + 1 > length - 1) {
    return (index + 1) - (length);
  } else {
    return index + 1;
  }
}

function peopleCards(index, people) {
  $('.card-left').children('.card-img').attr('src', `${people[index.left].cardImg}`);
  $('.card-left').children('.card-name').html(`${people[index.left].name}`);
  $('.card-left').children('.card-title').html(`${people[index.left].title}`);
  $('.card-left').children('.card-content').html(`${people[index.left].bio}`);

  $('.people-cards').children('.card-img').attr('src', `${people[index.mid].cardImg}`);
  $('.people-cards').children('.card-name').html(`${people[index.mid].name}`);
  $('.people-cards').children('.card-title').html(`${people[index.mid].title}`);
  $('.people-cards').children('.card-content').html(`${people[index.mid].bio}`);

  $('.btn-mid').data('index', index.mid);

  $('.card-right').children('.card-img').attr('src', `${people[index.right].cardImg}`);
  $('.card-right').children('.card-name').html(`${people[index.right].name}`);
  $('.card-right').children('.card-title').html(`${people[index.right].title}`);
  $('.card-right').children('.card-content').html(`${people[index.right].bio}`);

}

function viewPeopleModal(people) {
  $('.btn-mid').click(function() {
    event.preventDefault();
    let data = $('.btn-mid').data('index');
    $('.people-modal').addClass('js-modal-active');
    $('.overlay').css('display', 'block');

    $('.js-card-img').attr('src', people[data].cardImg);
    $('.js-card-name').html(people[data].name);
    $('.js-card-title').html(people[data].title);
    $('.js-card-content').html(people[data].fullBio);
  });
}

function closePeopleModal() {
  $('.overlay').on('click', function() {
    if($('.js-modal-active').length > 0) {
      $('.people-modal').removeClass('js-modal-active');
      $('.overlay').css('display', 'none');
    }
  });
  $('.modal-close').on('click', function() {
    event.preventDefault();
    $('.people-modal').removeClass('js-modal-active');
    $('.overlay').css('display', 'none');
  });
}
