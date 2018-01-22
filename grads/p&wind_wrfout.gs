'reinit'
'set grid off'
'open  d1_p.ctl'
'set lon 63 105'
'set lat 38 57'
'set mpdset cnworld'
'set lev 500'
tt=1
while (tt <= 97)
'set grads off'
'set map 1 1 9'
'set t 'tt''
'set gxout contour'
'set ccolor 2'
'set cthick 8'
'd smth9(smth9(smth9(smth9(geopt/100))))'
'set gxout vector'
len = 0.5
scale = 20
xrit = 10.1
ybot = 6.7
*xrit = 9.3
*ybot = 6.4
'set arrscl 'len' 'scale
'set arrlab off'
'd skip(U,10);skip(V,10)'
'set line 0 3 2'
'draw recf 9.1 6.4 10.5 6.95'
*'draw recf 8.2 6.2 9.67 6.75'
'set string 1 c 10 0'
'set strsiz 0.1 0.1'
'draw string 9.8 6.6 Reference Vector'
*'draw string 8.9 6.3 Reference Vector'
'set line 1 1 2'
'draw line 9.1 6.4 9.1 6.95'
'draw line 9.1 6.4 10.5 6.4'
*'draw line 8.2 6.2 8.2 6.75'
*'draw line 8.2 6.2 9.67 6.2'
rc = arrow(xrit-0.25,ybot+0.2,len,scale)
'q time'
x=subwrd(result,3)
'draw title geopotential height 500hPa 'x''
'printim ./p_wind/'tt'.png white x2000 y2000'
'c'
tt=tt+2
endwhile
function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y+0.025' 'x+len/2.' 'y
'draw line 'x+len/2.-0.05' 'y-0.025' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.1'
'draw string 'x' 'y-0.1' 'scale
return
'c'
;