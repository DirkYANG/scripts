'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/20160616-18level.nc'

'set mpdset cnworld'
'set lon 30 150'
'set lat 15 65'

tt=1
while(tt<=12)
'set grid off'
'set grads off'
'set clevs 25 30 35 40 45'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/6colors.gs'
'set t 'tt''
'set lev 200'
'set cmin 30'
'set gxout shaded'
'define wind=sqrt(u*u+v*v)'
'd wind'
'cbarn'
'set gxout vector'
'set lev 850'
'd skip(u,15);skip(v,15)'
'set gxout contour'
'set ccolor 2'
'set cthick 12'
'set map 1 1 6'
'set clab forced'
'set lev 500'
'd z/100'
'q time'
x=subwrd(result,3)
*'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
*'draw title circulation 'x' '
'printim ./circulation/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;