'reinit'
'open  nbe.ctl'
'set gxout shaded'
tt=1
while (tt <= 17)
'set t 'tt''
'set lev 200'
'set lon 81 88'
'set lat 41 47'
'd nbeterm'
'cbar'
'q time'
time=subwrd(result,3)
'draw title nbeterm 'time''
'printim ./nbe200hpa/nbe200hpa_'time'.png x1000 y1000 white'
tt=tt+1
'c'
endwhile
;
