// https://support.google.com/analytics/answer/1136920?hl=en
function trackOutboundLink(url) {
    ga('send', 'event', 'outbound', 'click', url, {
         'hitCallback': function() { document.location = url; },
         'transport': 'beacon',
   });
}
