window.addEventListener("load", function() {
  const elem = document.createElement("script");
  elem.src = "https://static.zdassets.com/ekr/snippet.js?key=e676765a-140c-4581-9009-3e4137406b7c";
  elem.id = "ze-snippet";
  elem.onload = () => {
      window["zE"]('webWidget', 'helpCenter:setSuggestions', { labels: ['application_form'] });
  }

  const head = document.getElementsByTagName("head")[0];
  head.insertBefore(elem, head.childNodes[1]);
});