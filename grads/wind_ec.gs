'reinit'
'sdfopen  /Users/yangrui/Documents/research/WRF/case/bole20160616/EC/20160616-18level.nc'

'set mpdset cnworld'
'set lon 30 130'
'set lat 20 60'

tt=1
while(tt<=12)
'set grid off'
'set grads off'
'set clevs 5 10 15 20 25'
'run   /Users/yangrui/soft/grads-2.1.0/mycolors/6colors.gs'
'set t 'tt''
'set lev 200'
'set cmin 30'
'set gxout shaded'
'define wind=sqrt(u*u+v*v)'
'd wind'
'cbarn 1 1 8 4.5'
'set gxout vector'
'd skip(u,15);skip(v,15)'
'q time'
x=subwrd(result,3)
*'draw shp /Users/yangrui/soft/grads-2.1.0/shp/CHN_adm3.shp'
'draw title wind 200hPa 'x' '
'printim ./wind200hpa/'tt'.png x2000 y2000 white'
'c'
tt=tt+1
endwhile
;