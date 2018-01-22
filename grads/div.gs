'reinit'
'open  dynamic.ctl'
'set gxout fwrite'
'set fwrite div.dat'
'set lon 81 85'
'set lat 40 42'
tt=1
while (tt <= 25)
'set t 'tt''
zz=1
while(zz<=20)
'set z 'zz''
'define div = hdivg(U,V)'
'd div'
zz=zz+1
endwhile
tt=tt+1
endwhile
'disable fwrite'
'c'
;