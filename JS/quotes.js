const quotes =[
  {
    quote:"자신감 있는 표정을 지으면 자신감이 생긴다 ",
    author:"찰스다윈",

  },
  {
    quote:"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다  ",
    author:"간디",
  },
  {
    quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라 ",
    author:"제임스 딘",
  },
  {
    quote:"돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.  ",
    author:"쇼펜하우어",
  },
  {
    quote:"세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다  ",
    author:"헨렌켈러",
  },
  {
    quote:"나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다 ",
    author:"맥아더",
  },
  {
    quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다. ",
    author:"이소룡",
  },
  {
    quote:"사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다. ",
    author:"괴테",
  },
  {
    quote:"일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다 ",
    author:"루이사 메이올콧",
  },
  {
    quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다 ",
    author:"볼드윈",
  },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote =quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;