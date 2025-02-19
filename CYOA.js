var storyContent = {"inkVersion":21,"root":[[{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":[["^You are in a plane crash in northern Canada. You only have time to get one tool from the plane before it sinks. What tool do you want?","\n","ev","str","^Bow and Arrows","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ax","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"bow_choice"},"\n",{"#f":5}],"c-1":["^ ",{"->":"ax_choice"},"\n",{"#f":5}]}],{"#f":1}],"bow_choice":["ev","str","^Bow","/str",{"f()":"set_tool"},"pop","/ev","\n",{"->":"what_do_you_do"},{"#f":1}],"ax_choice":["ev","str","^Ax","/str",{"f()":"set_tool"},"pop","/ev","\n",{"->":"what_do_you_do"},{"#f":1}],"set_tool":[{"temp=":"answer"},"ev",{"VAR?":"answer"},"/ev",{"VAR=":"tool","re":true},{"#f":1}],"what_do_you_do":[["ev",{"VAR?":"Fire"},true,"==",{"VAR?":"Food"},true,"==","&&",{"VAR?":"Shelter"},true,"==","&&",{"VAR?":"Water"},true,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["^ You survived!",{"->":".^.^.^.19"},null]}],[{"->":".^.b"},{"b":["^What will you do?",{"->":".^.^.^.19"},null]}],"nop","\n","ev","str","^Make a Fire","/str",{"VAR?":"Fire"},false,"==","/ev",{"*":".^.c-0","flg":21},"ev","str","^Make a Shelter","/str",{"VAR?":"Shelter"},false,"==","/ev",{"*":".^.c-1","flg":21},"ev","str","^Get Food","/str",{"VAR?":"t_food"},"str","^Berries","/str","!=",{"VAR?":"t_food"},"str","^meat","/str","!=","||","/ev",{"*":".^.c-2","flg":21},"ev","str","^Get water","/str",{"VAR?":"Water"},false,"==","/ev",{"*":".^.c-3","flg":21},"ev","str","^Cook your meat","/str",{"VAR?":"t_food"},"str","^meat","/str","==","/ev",{"*":".^.c-4","flg":21},"ev",{"VAR?":"Fire"},true,"==",{"VAR?":"Shelter"},true,"==","&&",{"VAR?":"Food"},true,"==","&&",{"VAR?":"Water"},true,"==","&&","/ev",{"*":".^.c-5","flg":25},{"c-0":["^ ",{"->":"make_fire"},"\n",{"#f":5}],"c-1":["^ ",{"->":"make_shelter"},"\n",{"#f":5}],"c-2":["^ ",{"->":"food"},"\n",{"#f":5}],"c-3":["^ ",{"->":"water"},"\n",{"#f":5}],"c-4":["^ ",{"->":"cook_food"},"\n",{"#f":5}],"c-5":[{"->":"survive_night"},"\n",{"#f":5}]}],{"#f":1}],"water":[["^Will you heat up your water?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"Fire"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",true,"/ev",{"VAR=":"Water","re":true},{"->":"what_do_you_do"},{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^You need a fire! ",{"->":"need_fire"},"\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"#f":5}],"c-1":["\n","^You froze to death!","\n",{"->":"done"},{"#f":5}]}],{"#f":1}],"need_fire":[["^Will you still heat up your water?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"make_fire"},{"#f":5}],"c-1":["\n","^You froze to death!","\n",{"->":"done"},{"#f":5}]}],{"#f":1}],"need_fire_meat":[["^Will you still cook your meat?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"make_fire"},{"#f":5}],"c-1":["\n",{"->":"what_do_you_do"},{"#f":5}]}],{"#f":1}],"cook_food":["ev",{"VAR?":"Fire"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",true,"/ev",{"VAR=":"Food","re":true},{"->":"what_do_you_do"},{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{"b":["\n","^Youu need a fire!","\n",{"->":"need_fire_meat"},{"->":".^.^.^.5"},null]}],"nop","\n",{"#f":1}],"food":[["^How will you get food?","\n","ev","str","^Hunt","/str",{"VAR?":"tool"},"str","^Bow","/str","==","/ev",{"*":".^.c-0","flg":21},"ev","str","^Set a trap","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Gather food","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev","str","^meat","/str","/ev",{"VAR=":"t_food","re":true},{"->":"what_do_you_do"},{"#f":5}],"c-1":["\n","ev","str","^meat","/str","/ev",{"VAR=":"t_food","re":true},{"->":"what_do_you_do"},{"#f":5}],"c-2":["^ ",{"->":"gather"},"\n",{"#f":5}]}],{"#f":1}],"gather":[["^Will you...","\n",["ev",{"^->":"gather.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Gather mushrooms",{"->":"$r","var":true},null]}],["ev",{"^->":"gather.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Gather Berrie",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"gather.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^You died of food piosoning","\n",{"->":"done"},{"#f":5}],"c-1":["ev",{"^->":"gather.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^You got some food!","\n","ev",true,"/ev",{"VAR=":"Food","re":true},"ev","str","^berries","/str","/ev",{"VAR=":"t_food","re":true},{"->":"what_do_you_do"},{"#f":5}]}],{"#f":1}],"make_shelter":[["^What will you make your shelter out of?","\n","ev","str","^Wood","/str",{"VAR?":"tool"},"str","^Ax","/str","==","/ev",{"*":".^.c-0","flg":21},"ev","str","^Twigs","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Ice/Snow","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",true,"/ev",{"VAR=":"Shelter","re":true},{"->":"what_do_you_do"},{"#f":5}],"c-1":["\n",{"->":"twig_shelter"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"Fire"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You melted your shelter!","\n","ev",false,"/ev",{"VAR=":"Shelter","re":true},{"->":"what_do_you_do"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","ev",true,"/ev",{"VAR=":"Shelter","re":true},{"->":"what_do_you_do"},{"->":".^.^.^.8"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"twig_shelter":[["^Will you use leaves?","\n","ev","str","^Yes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^No","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",true,"/ev",{"VAR=":"Shelter","re":true},{"->":"what_do_you_do"},{"#f":5}],"c-1":["\n","^You froze to death!","\n",{"->":"done"},{"#f":5}]}],{"#f":1}],"make_fire":[["^What will you use to start your fire?","\n","ev","str","^Dried moss","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Snow","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Wood","/str",{"VAR?":"tool"},"str","^Ax","/str","==","/ev",{"*":".^.c-2","flg":21},{"c-0":["\n","ev",true,"/ev",{"VAR=":"Fire","re":true},"ev",{"VAR?":"Ice"},"/ev",[{"->":".^.b","c":true},{"b":["^ You melted your shelter! ",{"->":"done"},{"->":".^.^.^.9"},null]}],"nop","\n",{"->":"what_do_you_do"},{"#f":5}],"c-1":["\n","^Really?","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","ev",true,"/ev",{"VAR=":"Fire","re":true},"ev",{"VAR?":"Ice"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^You melted your shelter!","\n","ev",false,"/ev",{"VAR=":"Shelter","re":true},{"->":".^.^.^.9"},null]}],"nop","\n",{"->":"what_do_you_do"},{"#f":5}]}],{"#f":1}],"survive_night":["^Congratulations! You have both a fire and shelter. You survive the night.","\n",{"->":"done"},{"#f":1}],"done":[["^How was it?","\n","ev","str","^Good","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ummm","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","done",{"#f":5}],"c-1":["\n","done",{"#f":5}]}],{"#f":1}],"global decl":["ev",false,{"VAR=":"Fire"},false,{"VAR=":"Water"},false,{"VAR=":"Food"},false,{"VAR=":"Shelter"},"str","^Default","/str",{"VAR=":"tool"},4,{"VAR=":"time"},5,{"VAR=":"time_to_night"},false,{"VAR=":"Ice"},"str","^Default","/str",{"VAR=":"t_food"},"/ev","end",null],"#f":1}],"listDefs":{}};