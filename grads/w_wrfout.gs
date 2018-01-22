'reinit'
'open  w20down.ctl'
tt=73
while (tt <= 577)
'set t 'tt''
zz=9

while(zz<=35)
kk=zz*0.5+2.5
'set grads off'
'set parea 0 11.0 0.5 8'
'set lon 79 88'
'set lat 40.5 47.5'
'set z 'zz
'set clevs -16 -12 -8 -4 0 4 8 12 16'
'set rgb 60 152 241 234'
'set rgb 70 233 239 170'
'set rgb 80 220 242 6'
'set ccols  14 4 11 3 60 70 80 7 12 2'
'set gxout shaded'
*'draw ylab lat'
'set ylevs 41N 43N 45N 47N'
'set ylopts 1 5 0.22'
*'draw xlab lon'
'set xlevs 79E 81E 83E 85E 87E'
'set xlopts 1 5 0.22'

'd W*100'
'cbarn 1 1 10.2 4.5'
'set lwid 13 9'
'set line 1 1 13'
'draw line 2 2 5 3.1'
'q time'
x=subwrd(result,3)
*'set string 2 c 2 0'
*'set strsiz 0.8 1'
'draw title vertical speed 'kk'km 'x''
'printim ./w20down/'tt'_'kk'.png white x2000 y2000'
zz=zz+2
'c'
endwhile
tt=tt+72
endwhile
'c'
;
