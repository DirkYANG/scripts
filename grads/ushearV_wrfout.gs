'reinit'
'open  ./ushear.ctl'
'open  ../test.ctl'
'set gxout shaded'
p1=700
p2=50
******the range to display in the picture******
lons1=84
lons2=87
tt=1
while (tt <= 49)
'set parea 0.5 9.5 0.5 8'
'set grid off'
'set grads off'
'set t 'tt''
'set y 1'
'set lev 'p1' 'p2''
'set lon 'lons1' 'lons2''
'set csmooth on'
'set ylint 100'
'set ylopts  1 6 0.15'
'set xlopts  1 6 0.15'
'set cmin -10'
'set cmax 10'
'set clevs -10 -8 -6 -4 -2 0 2 4 6 8 10'
'd maskout(u,99-u)'
'cbarn 1 1 10 5'
  
'q time'
time=subwrd(result,3)
'draw title u shear 'time''
'printim ./ushear_v/u_'tt'.png x1000 y1000 white'
tt=tt+1
'c'
endwhile
;
