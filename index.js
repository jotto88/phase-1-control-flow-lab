function scuberGreetingForFeet(feet){
  if ( feet<= 400) {
    return 'This one is on me!'
  }
  if ( feet<2000) {
    return 'That will be twenty bucks.'
  }
  if ( feet>2000 && feet<=2500) {
    return 'I will gladly take your thirty bucks.'
  }
    else {
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  let reply;
  city === "NYC" ? reply = 'Ok, sounds good.' : reply = 'No go.';
  return reply;  
}

function switchOnCharmFromTip(tips){
  if(tips==='generous') {
    return 'Thank you so much.';
  }
  if(tips==='not as generous') {
    return 'Thank you.';
  }
  if (tips === 'thanks for everything') {
    return 'Bye.';
  }

}