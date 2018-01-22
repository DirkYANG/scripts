'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/20160616-18level.nc'

'set mpdset cnworld'


tt=1
while(tt<=12)
'set grid off'
'set grads off'
*'set clevs  8 10 12 14 16'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/6colors.gs'
'set t 'tt''
'set lev 850'
*'set cmin 8'
'set lon 70 100'
'set lat 35 50'
'set gxout shaded'
'define wind=sqrt(u*u+v*v)'
'd d'
'cbarn'
'set gxout vector'
'd skip(u,10);skip(v,10)'
'q time'
x=subwrd(result,3)
*'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
'draw title divergence 850hPa 'x' '
'printim ./divergence850hpa/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;