// apparently I was getting cors with Fetch strange :(
// const getQoute = async () => {
//   try {
//     const a = await fetch(
//       `https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote`,
//       { credentials: 'omit', method: 'POST' }
//     );
//     console.log(a);
//   } catch (error) {
//       console.error(error);
//   }
// };

// getQoute();

const  fd = 'method=getQuote&format=jsonp&lang=en&jsonp=callback'
$.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    jsonp: 'callback',
    dataType:'jsonp',
    data: fd
});

const callback = function (response) {
    document.querySelector('blockquote').innerText = `" ${response.quoteText}"`; 
}
