var mass=new Array (9);

function dog ()
{
	var place = Math.floor(Math.random()* 9);
    mass[place] ? dog() : going(place, 'dog');
}
function going (id,choice)
{
   if(mass[id]) return false;
   mass[id] = choice;
   document.getElementById(id).className = 'square'+ ' ' + choice;
   !combinations() ? (choice == 'cat') ? dog(): null : end()
}

function combinations()
{
   if (mass[0]=='dog' && mass[1]=='dog' && mass[2]=='dog' || mass[0]=='cat' && mass[1]=='cat' && mass[2]=='cat') return true;
   if (mass[3]=='dog' && mass[4]=='dog' && mass[5]=='dog' || mass[3]=='cat' && mass[4]=='cat' && mass[5]=='cat') return true;
   if (mass[6]=='dog' && mass[7]=='dog' && mass[8]=='dog' || mass[6]=='cat' && mass[7]=='cat' && mass[8]=='cat') return true;

   if (mass[0]=='dog' && mass[3]=='dog' && mass[6]=='dog' || mass[0]=='cat' && mass[3]=='cat' && mass[6]=='cat') return true;
   if (mass[1]=='dog' && mass[4]=='dog' && mass[7]=='dog' || mass[1]=='cat' && mass[4]=='cat' && mass[7]=='cat') return true;
   if (mass[2]=='dog' && mass[5]=='dog' && mass[8]=='dog' || mass[2]=='cat' && mass[5]=='cat' && mass[8]=='cat') return true;

   if (mass[0]=='dog' && mass[4]=='dog' && mass[8]=='dog' || mass[0]=='cat' && mass[4]=='cat' && mass[8]=='cat') return true;
   if (mass[2]=='dog' && mass[4]=='dog' && mass[6]=='dog' || mass[2]=='cat' && mass[4]=='cat' && mass[6]=='cat') return true;

  if (mass[0] && mass[1] && mass[2] && mass[3] && mass[4] && mass[5] && mass[6] && mass[7] && mass[8]) return true;
}



function end()
{
	alert("This is the end.");
	location.reload();
}

